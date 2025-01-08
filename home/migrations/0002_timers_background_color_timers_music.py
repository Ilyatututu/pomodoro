# Generated by Django 5.1.4 on 2025-01-06 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='timers',
            name='background_color',
            field=models.CharField(default='#ffffff', max_length=7),
        ),
        migrations.AddField(
            model_name='timers',
            name='music',
            field=models.CharField(default='static/media/audio/1.mp3', max_length=255),
        ),
    ]