from django.db import models

# Create your models here.

class Administrador(models.Model):
    admin_id = models.AutoField(primary_key=True)
    account = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

class RepresentanteEntrenador(models.Model):
    coach_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    team_id = models.IntegerField()  # Esto establece la relación con la tabla 'equipos'

    def __str__(self):
        return self.name

class EstadisticasPartido(models.Model):
    partido_id = models.IntegerField()
    jugador_id = models.IntegerField()
    amarillas = models.IntegerField(default=0)
    rojas = models.IntegerField(default=0)

    class Meta:
        unique_together = ('partido_id', 'jugador_id')

    def __str__(self):
        return f"Partido {self.partido_id} - Jugador {self.jugador_id}"

class Partido(models.Model):
    partido_id = models.AutoField(primary_key=True)
    id_local = models.ForeignKey('Equipos', on_delete=models.CASCADE, related_name='partidos_local', db_column='id_local')
    id_visita = models.ForeignKey('Equipos', on_delete=models.CASCADE, related_name='partidos_visita', db_column='id_visita')
    date = models.DateField()
    goles_local = models.IntegerField(default=0)
    goles_visita = models.IntegerField(default=0)

    def __str__(self):
        return f"Partido ID: {self.partido_id}"

class Equipos(models.Model):
    team_id = models.AutoField(primary_key=True)
    team_name = models.CharField(max_length=100)

    def __str__(self):
        return self.team_name

class Jugadores(models.Model):
    player_id = models.AutoField(primary_key=True)
    team_id = models.ForeignKey(Equipos, on_delete=models.CASCADE)
    player_name = models.CharField(max_length=100)
    player_lastName = models.CharField(max_length=100)
    def __str__(self):
        return f"Jugador ID: {self.player_id}"
    
