from django.urls import path

from . import views

urlpatterns = [
    path("match", views.get_nextMatch),
    path("all_matchs", views.get_allMatchs),
    path("tables", views.get_table),
    path("schedule", views.get_schedule),
]