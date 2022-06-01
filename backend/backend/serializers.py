from rest_framework import serializers

from backend.models import NewUser


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = "__all__"
