from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from backendapp.models import User
from backendapp.serializers import NewUserSerializer
from util.user_util import login


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("pk")
    serializer_class = NewUserSerializer

    @action(methods=['POST'], detail=True, url_path='registeruser')
    def registeruser(self, request, pk):
        user = User(user=self.get_object())
        return Response(data=user)

    @action(methods=['GET'], detail=True, url_path='loginuser')
    def loginuser(self, request, pk):
        user = User.objects.get(id=request.id)
        login(user, request)

