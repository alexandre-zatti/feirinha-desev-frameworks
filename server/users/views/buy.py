from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.exceptions import ParseError

from ..models import History
from ..serializers import HistorySerializer
from ..utils import Utils

from products.models import Product


class BuyView(GenericAPIView, UpdateModelMixin):
    lookup_field = 'id'
    queryset = History.objects.all()
    serializer_class = HistorySerializer

    @staticmethod
    def post(request):

        user = Utils().get_logged_user(request=request)
        product = Product.objects.filter(id=request.data['product']).first()

        if user.saldo >= request.data['total'] and product.quantidade >= request.data['quantidade']:
            serializer = HistorySerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            user.saldo = user.saldo - request.data['total']
            user.save()

            product.quantidade = product.quantidade - request.data['quantidade']
            product.save()

            return Response(serializer.data)

        raise ParseError('Saldo ou estoque do produto insuficiente!')

