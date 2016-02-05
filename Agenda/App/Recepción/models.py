from django.db import models


class Reception(models.Model):
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    password = models.CharField(max_length=50)

    def __unicode__(self):
        return "%s" % (self.name)
