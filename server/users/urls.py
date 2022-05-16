from django.urls import path
from .views import RegisterView
from .views import LoginView
from .views import LogoutView
from .views import UserView
from .views import HistoryView
from .views import BuyView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('user/<int:matricula>/', UserView.as_view()),
    path('user', UserView.as_view()),
    path('history/<int:user>/', HistoryView.as_view()),
    path('buy', BuyView.as_view()),
]
