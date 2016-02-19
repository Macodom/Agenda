from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext

from Agenda.App.Area.forms import *
from .models import Area


def Consulta_area(request):
    ObjModelQuery = Area.objects.all().order_by('-id')
    ctx = {
        'ObjModelQuery': ObjModelQuery,
    }
    return render_to_response('consulta_area.html', ctx, context_instance=RequestContext(request))


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


def Editar_area(request, pk):
    ObjModelGet = Area.objects.get(pk=pk)
    if request.method == 'POST':
        FormA = FormAreas(request.POST, request.FILES, instance=ObjModelGet)
        if FormA.is_valid():
            FormA.save()
            msj = 'Guardado correctamente.'
            messages.add_message(request, messages.SUCCESS, msj)
            return HttpResponseRedirect('/consulta_area/')
        else:
            msj = 'Favor de Corregir los siguientes errores.'
            messages.add_message(request, messages.ERROR, msj)
            ctx = {
                'ArForm': FormA,
                'statusEdit': True,
            }
            return render_to_response('formulario_area.html', ctx, context_instance=RequestContext(request))
    else:
        AreasForm = FormAreas(instance=ObjModelGet)
        ctx = {
            'AForm': AreasForm,
            'statusEdit': True,
        }
        return render_to_response('formulario_area.html', ctx, context_instance=RequestContext(request))


def Eliminar_area(request, pk):
    Area.objects.get(pk=pk).delete()

    msj = 'Registro eliminado correctamente.'
    messages.add_message(request, messages.SUCCESS, msj)

    return HttpResponseRedirect('/consulta_area/')
