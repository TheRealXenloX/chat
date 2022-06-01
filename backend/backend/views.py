from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from backend.models import NewUser
from backend.serializers import NewUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = NewUser.objects.all().order_by("pk")
    serializer_class = NewUserSerializer

    @action(methods=['POST'], detail=True, url_path='registeruser')
    def registeruser(self, request, pk):
        NewUser(user=self.get_object())
        return Response(data="the bot has started.")

    @action(methods=['GET'], detail=True, url_path='loginuser')
    def loginuser(self, request, pk):
        username = NewUser.objects.get(username=request.username)
        if username.password == request.password:
            return Response({"isValid": True, "errorcode": "Logged in succesfully"})
        else:
            return Response({"isValid": False, "errorcode": "Username or password not correct"})
