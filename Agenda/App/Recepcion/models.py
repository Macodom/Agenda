from django.db import models


class Reception(models.Model):
    name = models.CharField(max_length=50, unique=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(max_length=20, blank=False, null=True)

    def __str__(self):
        return "%s" % self.name
