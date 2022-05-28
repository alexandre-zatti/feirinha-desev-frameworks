from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin

from ..models import User
from ..serializers import UserSerializer
from ..utils import Utils


class UsersView(GenericAPIView, UpdateModelMixin):
    serializer_class = UserSerializer

    def get(self, request):
        Utils().get_logged_user(request=request)

        users = User.objects.all()

        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
