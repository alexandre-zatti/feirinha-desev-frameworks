from rest_framework import serializers
from ..models import User


class FeiranteSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'matricula', 'feirante', 'qrcode', 'saldo']

