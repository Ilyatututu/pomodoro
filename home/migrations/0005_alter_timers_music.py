# Generated by Django 5.1.4 on 2025-01-07 23:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_timers_music'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timers',
            name='music',
            field=models.CharField(default='pomodoro/static/media/audio/1.mp3', max_length=255),
        ),
    ]
