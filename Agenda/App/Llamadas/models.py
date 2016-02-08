from django.db import models
from Agenda.App.Cliente.models import Client

class Calls(models.Model):
    phone = models.CharField(max_length=12, blank=True)
    type_call = models.CharField(max_length=50, blank=True)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    type_contact = models.CharField(max_length=100, blank=True)
    comments = models.TextField(max_length=500, blank=True)
    observations = models.TextField(max_length=500, blank=True)
    client = models.ForeignKey(Client)

    def __str__(self):
        return "%s" % self.phone
