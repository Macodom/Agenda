from django.db import models


class Reception(models.Model):
    name = models.CharField(unique=True)
    last_name = models.ForeignKey(blank=True, null=True)
    password = models.CharField(blank=False, null=True)


    def __unicode__(self):
        return "%s" % (self.name)
