from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import UserSerializer
from drf_yasg.utils import swagger_auto_schema


class RegisterView(APIView):

    @swagger_auto_schema(
        request_body=UserSerializer,
        responses={
            '200': UserSerializer,
            '400': "Bad Request"
        },
        operation_id='Register Endpoint',
        operation_description='Endpoint utilizado para cadastro de um novo usuario no sistema.'
    )
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
