from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.exceptions import NotFound

from ..models import History
from ..serializers import HistorySerializer
from ..utils import Utils


class HistoryView(GenericAPIView, UpdateModelMixin):
    lookup_field = 'id'
    queryset = History.objects.all()
    serializer_class = HistorySerializer

    @staticmethod
    def get(request, *args, **kwargs):
        Utils().get_logged_user(request=request)

        if 'user' in kwargs:
            history = History.objects.filter(user_id=kwargs['user']).all()
            serializer = HistorySerializer(history, many=True)
            return Response(serializer.data)

        raise NotFound('User not found!')
