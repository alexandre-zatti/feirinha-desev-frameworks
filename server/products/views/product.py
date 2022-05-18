from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.exceptions import PermissionDenied, NotFound

from ..models import Product
from ..serializers import ProductSerializer

from users.utils import Utils


class ProductView(GenericAPIView, UpdateModelMixin):
    lookup_field = 'id'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @staticmethod
    @swagger_auto_schema(
        request_body=ProductSerializer,
        responses={
            '200': ProductSerializer,
            '403': 'You do not have permission to perform this action.'
        },
        operation_id='Product post endpoint',
        operation_description='Endpoint utilizado para inserir um novo produto ao sistema.'
    )
    def post(request):
        user = Utils().get_logged_user(request=request)

        if user.feirante:
            serializer = ProductSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

        raise PermissionDenied()

    @staticmethod
    def get(request, *args, **kwargs):
        Utils().get_logged_user(request=request)

        if 'id' in kwargs:
            product = Product.objects.filter(id=kwargs['id']).first()
            if product is None:
                raise NotFound('Product not found!')

            serializer = ProductSerializer(product)
            return Response(serializer.data)

        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        user = Utils().get_logged_user(request=request)

        if user.feirante:
            return self.partial_update(request, *args, **kwargs)
        raise PermissionDenied()
