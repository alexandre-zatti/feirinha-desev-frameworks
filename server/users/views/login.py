import datetime
import jwt
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import User
from ..serializers import LoginSerializer


class LoginView(APIView):

    @staticmethod
    def post(request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        matricula = serializer.data['matricula']

        user = User.objects.filter(matricula=matricula).first()

        if user is None:
            raise AuthenticationFailed('Nenhum usuario com essa matricula foi encontrado!')

        payload = {
            'matricula': user.matricula,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'supersecretsecreto', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)

        response.data = {
            'jwt': token
        }

        return response
