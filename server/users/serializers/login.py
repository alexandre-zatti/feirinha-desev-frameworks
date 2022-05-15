from rest_framework import serializers
from ..models import User


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['matricula']
        extra_kwargs = {
            'matricula': {
                'validators': []
            }
        }