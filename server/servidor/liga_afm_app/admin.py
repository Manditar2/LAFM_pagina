from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Equipos)
admin.site.register(Partido)
admin.site.register(EstadisticasPartido)
admin.site.register(RepresentanteEntrenador)
admin.site.register(Jugadores)