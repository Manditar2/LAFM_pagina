from django.urls import path

from . import views

urlpatterns = [
    path("match", views.get_nextMatch),
    path("all_matchs", views.get_allMatchs)
]