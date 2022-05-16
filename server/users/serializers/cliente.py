from rest_framework import serializers
from ..models import User


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'matricula', 'feirante', 'qrcode', 'saldo']
        read_only_fields = ['id', 'matricula', 'feirante', 'qrcode']

