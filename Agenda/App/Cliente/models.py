from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return "%s" % self.name
