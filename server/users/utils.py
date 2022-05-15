import jwt
from rest_framework.exceptions import AuthenticationFailed
from .models import User


class Utils:
    def get_logged_user(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!', 401)

        try:
            payload = jwt.decode(token, 'supersecretsecreto', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!', 401)

        return User.objects.filter(matricula=payload['matricula']).first()
