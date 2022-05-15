from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin

from ..models import User
from ..serializers import UserSerializer
from ..serializers import FeiranteSerializer
from ..serializers import ClienteSerializer
from ..utils import Utils


class UserView(GenericAPIView, UpdateModelMixin):
    lookup_field = 'matricula'
    queryset = User.objects.all()
    serializer_class = ClienteSerializer

    def get(self, request):
        user = Utils().get_logged_user(request=request)

        serializer = UserSerializer(user)

        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        user = Utils().get_logged_user(request=request)

        if user.feirante:
            self.serializer_class = FeiranteSerializer

            user.feirante = False
            user.save()

            return self.partial_update(request, *args, **kwargs)

        if user.matricula != kwargs['matricula']:
            raise AuthenticationFailed('Unauthorized!', 401)

        return self.partial_update(request, *args, **kwargs)
