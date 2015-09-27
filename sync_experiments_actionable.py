from datetime import date
from sync_experiment_models import Code, User

local_editor = User(username="PLACEHOLDER")

livecode = Code(edit_time=date.today()
               code_name='PLACEHOLDER2'
                content='PLACEHOLDER3', editor=local_editor)


__author__ = 'Alec'
