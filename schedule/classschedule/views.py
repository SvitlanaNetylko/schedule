from django.shortcuts import render
from django.http import HttpResponse
from .models import newSchedule
from django.shortcuts import redirect
def home(request):
    classschedule = newSchedule.objects.all()
    return render(request, 'index.html', {'classschedule': classschedule})
# Create your views here.
def classsched_subjects(request, pk):
    classsched = newSchedule.objects.get(pk=pk)
    return render(request, 'indexCreate.html', {'classsched':classsched})
