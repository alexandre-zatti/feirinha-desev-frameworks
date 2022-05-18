from rest_framework import serializers
from ..models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'matricula', 'feirante', 'qrcode', 'saldo']
        read_only_fields = ['feirante', 'qrcode']

