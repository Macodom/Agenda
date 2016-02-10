from django import forms
from django.forms import TextInput

from Agenda.App.Area.models import *


class FormAreas(forms.ModelForm):
    class Meta:
        model = Area
        fields = ('name',)
        widgets = {

            'name': TextInput(
                attrs={'class': 'span12', 'id': 'name', 'placeholder': 'Nombre de las distintas áreas',})
        }
