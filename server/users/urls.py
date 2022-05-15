from django.urls import path
from .views import RegisterView
from .views import LoginView
from .views import LogoutView
from .views import UserView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('user/<int:matricula>/', UserView.as_view()),
    path('user', UserView.as_view()),
]
