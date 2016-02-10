from django.shortcuts import render_to_response
from django.template import RequestContext
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from Agenda.App.Area.forms import *

from .models import Area


def Formulario_area(request):
    if request.method == 'POST':
        FormA = FormAreas(request.POST)
        if FormA.is_valid():
            FormA.save()
            msj = 'Guardado correctamente.'
            messages.add_message(request, messages.SUCCESS, msj)
            return HttpResponseRedirect('formulario_area.html')
        else:
            msj = 'Favor de revisar que los campos esten correctos.'
            messages.add_message(request, messages.ERROR, msj)
            ctx = {
                'AForm': FormA,
                'statusSave': True,
            }
            return render_to_response('formulario_area.html', ctx, context_instance=RequestContext(request))
    else:
        AreasForm = FormAreas()
        ctx = {
            'AForm': AreasForm,
            'statusSave': True,
        }
        return render_to_response('formulario_area.html', ctx, context_instance=RequestContext(request))


def Consulta_area(request):
    ObjModelQuery = Area.objects.all().order_by('-id')
    ctx = {
        'ObjModelQuery': ObjModelQuery,
    }
    return render_to_response('consulta_area.html', ctx, context_instance=RequestContext(request))
