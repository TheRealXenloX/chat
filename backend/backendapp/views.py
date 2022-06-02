from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from backendapp.models import Users
from backendapp.serializers import UserSerializer
from util.user_util import login


class UserViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all().order_by("pk")
    serializer_class = UserSerializer

    @action(methods=['POST'], detail=True, url_path='registeruser')
    def registeruser(self, request, pk):
        user = Users(user=self.get_object())
        return Response(data=user)

    @action(methods=['GET'], detail=True, url_path='loginuser')
    def loginuser(self, request, pk):
        user = Users.objects.get(id=request.id)
        login(user, request)

