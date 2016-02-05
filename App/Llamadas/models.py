from django.db import models

from App.Agenda


class Calls(models.Model):
    phone = models.CharField(max_length=12, blank=True)
    type_call = models.CharField(blank=True)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    type_contact = models.CharField(max_length=100, blank=True)
    comments = models.TextField(max_length=500, blank=True)
    observations = models.TextField(max_length=500, blank=True)
    client = models.ForeignKey(blank=True, null=True)

    def __unicode__(self):
        return "%s" % (self.phone)
