from django.db import models

class Gatunki(models.Model):
    nazwa = models.CharField(max_length=100)
    def __str__(self):
        return self.nazwa

class Filmy(models.Model):
    nazwa = models.CharField(max_length=100)
    opis = models.TextField(blank=True)
    gatunek = models.ForeignKey(Gatunki, on_delete=models.CASCADE)
    def __str__(self):
        return self.nazwa