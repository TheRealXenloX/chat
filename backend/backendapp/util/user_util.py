from rest_framework.response import Response


def login(user, request):
    if user.password == request.password:
        return Response(data={"isValid": True, "errorcode": "Logged in succesfully"})
    else:
        return Response(data={"isValid": False, "errorcode": "Username or password not correct"})