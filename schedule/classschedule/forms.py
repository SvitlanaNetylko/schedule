from django import forms

from .models import newSchedule

class scheduleForms(forms.Form):
    class Meta:
        name = forms.CharField(max_length=30)
        description = forms.CharField(max_length=100)


    def save(self):
        new_schedule = newSchedule.objects.create(name=self.cleaned_data['name'],
            description=self.cleaned_data['description']
        )
        return new_schedule
