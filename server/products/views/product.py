from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin

from ..models import Product
from ..serializers import ProductSerializer


class ProductView(GenericAPIView, UpdateModelMixin):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        return Response(request.data)

    def put(self, request, *args, **kwargs):
        pass
