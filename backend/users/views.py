from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from users.models import User
from users.serializers import userSerializer


class UserViewSet(viewsets.ModelViewSet):
    model = User
    queryset = User.objects.all()
    serializer_class = userSerializer

    @action(methods=['GET'], detail=True, url_path='getuser')
    def getUser(self, request, pk):
        print(request.user)
        # return Response(data=login(user, request))
        return Response(data="joe")
