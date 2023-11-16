from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.utils import timezone
from django.db.models import Q


from .models import *
from django.core.serializers import serialize

# Create your views here.
def index(request):
    return HttpResponse("Hola mundo")

def get_nextMatch(request):
    ahora = timezone.now()
    next_match = match.objects.filter(played=False, date__gte=ahora).order_by('date', 'hour').first()
    print(next_match)
    print(next_match.team1.name)
    print(next_match.team2.name)
    print(next_match.date)
    print(next_match.hour)
    
    if next_match:
        ans = {'local': next_match.team1.name,
            'visita': next_match.team2.name,
            'fecha': next_match.date,
            'hora' : next_match.hour
            }
    else:
        ans = {'local': None,
            'visita': None,
            'fecha': None,
            'hora' : None
            }
    return JsonResponse(ans)

def get_allMatchs(request):
    matches = match.objects.all().values('partido_id', 'id_local__team_name', 'id_visita__team_name', 'date', 'goles_local', 'goles_visita')
    print(matches)
    return JsonResponse(list(matches), safe=False)

def get_table(request):
    table = tables.objects.all().values('team__name', 'points', 'matchplayed', 'matchwon', 'matchdraw', 'matchlost', 'goalsfor', 'goalsagainst', 'goalsdifference').order_by('-points', '-goalsdifference', '-goalsfor')
    ans = []
    for i in table:
        ans.append(i)
        
    for i in range(len(ans)):
        ans[i]['pos'] = i+1
        print(ans[i])
    
    return JsonResponse(list(table), safe=False)

def get_schedule(request):
    schedule = match.objects.all().values( 'team1__name', 'team2__name', 'date', 'hour', 'matchweek', 'played', 'score1', 'score2', 'played').order_by('matchweek')
    ans = []
    for i in schedule:
        ans.append(i)
        
    return JsonResponse(list(schedule), safe=False)

def get_teams(request):
    teams = team.objects.all().values('name', 'id')
    ans = []
    for i in teams:
        ans.append(i)
    return JsonResponse(list(teams), safe=False)

def get_team_info(request):
    team_id = request.GET.get('team_id')
    team_players = player.objects.filter(team_id=team_id).values('name', 'lastname', 'rut', 'goals', 'assists', 'yellowcards', 'redcards')
    team_coach = coach.objects.filter(team_id=team_id).values('name', 'rut')
    team_next_match = match.objects.filter(Q(team1_id=team_id) | Q(team2_id=team_id), played=False).values('team1__name', 'team2__name', 'date', 'hour', 'matchweek', 'played', 'score1', 'score2', 'played').order_by('date').first()
    team_last_match = match.objects.filter(Q(team1_id=team_id) | Q(team2_id=team_id), played=True).values('team1__name', 'team2__name', 'date', 'hour', 'matchweek', 'played', 'score1', 'score2', 'played').order_by('-date').first()
    
    return JsonResponse({'players': list(team_players), 'coach': list(team_coach), 'next_match': list(team_next_match), 'last_match': list(team_last_match)}, safe=False)
