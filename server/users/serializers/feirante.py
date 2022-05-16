from rest_framework import serializers
from ..models import User


class FeiranteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'matricula', 'feirante', 'qrcode', 'saldo']
        read_only_fields = ['id']

