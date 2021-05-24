from django.shortcuts import render
from .models import *

def index(request):
    return render(request, 'index.html')

def tictactoesp(request):
    return render(request, 'tictactoesp.html')

def tictactoemp(request):
    return render(request, 'tictactoemp.html')

def baza(request):
    gatunki = Gatunki.objects.all()
    dane = {'gatunki': gatunki}
    return render(request, 'baza.html', dane)

def film(request, id):
    film_wybrany = Filmy.objects.get(pk=id)
    gatunki = Gatunki.objects.all()
    dane = {'film_wybrany' : film_wybrany,
            'gatunki': gatunki}
    return render(request, 'film.html', dane)

def gatunek(request, id):
    gatunek_wybrany = Gatunki.objects.get(pk=id)
    gatunek_film = Filmy.objects.filter(gatunek = gatunek_wybrany)
    gatunki = Gatunki.objects.all()
    dane = {'gatunek_wybrany': gatunek_wybrany,
            'gatunek_film': gatunek_film,
            'gatunki': gatunki}
    return render(request, 'gatunek_film.html', dane)

def wszystkie(request):
    gatunek_film = Filmy.objects.all()
    gatunki = Gatunki.objects.all()
    dane = {'gatunek_film': gatunek_film,
            'gatunki': gatunki}
    return render(request, 'gatunek_film.html', dane)
