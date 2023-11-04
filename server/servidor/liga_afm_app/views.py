from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.db.models import Q


from .models import *

# Create your views here.
def index(request):
    return HttpResponse("Hola mundo")

def get_nextMatch(request):
    last_match = Partido.objects.order_by("-date")[0]

    ans = {'local': last_match.id_local.team_name,
           'visita': last_match.id_visita.team_name,
           'fecha': last_match.date
    }
    return JsonResponse(ans)