from django.db import models

# Create your models here.
"""
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
    
from django.db import models
"""
class team(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name

class player(models.Model):
    rut = models.IntegerField()
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    team = models.ForeignKey(team, on_delete=models.CASCADE)
    goals = models.IntegerField(default=0)
    assists = models.IntegerField(default=0)
    yellowcards = models.IntegerField(default=0)
    redcards = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name
    
class match(models.Model):
    match_id = models.AutoField(primary_key=True)
    date = models.DateField()
    team1 = models.ForeignKey(team, on_delete=models.CASCADE, related_name='team1')
    team2 = models.ForeignKey(team, on_delete=models.CASCADE, related_name='team2')
    score1 = models.IntegerField(default=0, null=True)
    score2 = models.IntegerField(default=0, null=True)
    winner = models.IntegerField(default=None, null=True)
    hour = models.TimeField()
    matchweek = models.IntegerField()
    played = models.BooleanField(default=False)
    
    def __str__(self):
        return self.team1.name + " vs " + self.team2.name

class playermatch(models.Model):
    player = models.ForeignKey(player, on_delete=models.CASCADE)
    match = models.ForeignKey(match, on_delete=models.CASCADE)
    goals = models.IntegerField()
    assists = models.IntegerField()
    yellowcards = models.IntegerField()
    redcards = models.IntegerField()
    owngoals = models.IntegerField()
    
    def __str__(self):
        return self.player.name + ' - ' + self.match.team1.name + " VS " + self.match.team2.name
    
class coach(models.Model):
    rut = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=200)
    team_id = models.ForeignKey(team, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

class webAdmin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

class tables(models.Model):
    team = models.ForeignKey(team, on_delete=models.CASCADE, unique=True)
    matchplayed = models.IntegerField()
    matchwon = models.IntegerField()
    matchdraw = models.IntegerField()
    matchlost = models.IntegerField()
    goalsfor = models.IntegerField()
    goalsagainst = models.IntegerField()
    goalsdifference = models.IntegerField()
    points = models.IntegerField()
    
    def __str__(self):
        return self.team.name