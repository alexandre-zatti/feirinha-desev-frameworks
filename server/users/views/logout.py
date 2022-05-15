from rest_framework.response import Response
from rest_framework.views import APIView


class LogoutView(APIView):
    def post(self, request):
        response = Response()

        response.delete_cookie('jwt')

        response.data = {
            "message": "success"
        }

        return response
