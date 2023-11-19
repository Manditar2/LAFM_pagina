from django.contrib import admin

# Register your models here.
from .models import *
"""
admin.site.register(Equipos)
admin.site.register(Partido)
admin.site.register(EstadisticasPartido)
admin.site.register(RepresentanteEntrenador)
admin.site.register(Jugadores)"""
admin.site.register(team)
admin.site.register(player)
admin.site.register(match)
admin.site.register(playermatch)
admin.site.register(coach)
admin.site.register(webAdmin)
admin.site.register(tables)