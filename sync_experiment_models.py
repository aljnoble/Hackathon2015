from django.db import models

class User(models.Model):
    username = models.CharField(max_length=70)

    def __str__(self):              # __unicode__ on Python 2
        return self.username

class Code(models.Model):
    edit_time = models.DateField()
    code_name = models.Project()
    content = models.TextField()
    editor = models.ForeignKey(Editor)

    def __str__(self):              # __unicode__ on Python 2
        return self.project

__author__ = 'Alec'
