# Generated by Django 5.1.4 on 2024-12-25 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Timers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('hours', models.IntegerField(default=0)),
                ('minutes', models.IntegerField(default=25)),
                ('seconds', models.IntegerField(default=0)),
                ('category', models.CharField(max_length=50)),
                ('uuid', models.IntegerField(default=0)),
                ('priority', models.IntegerField(default=0)),
            ],
        ),
    ]
