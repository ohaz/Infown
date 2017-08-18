from app import app
from flask import render_template
import json
from config import WEATHER_SECRET

from apixu.client import ApixuClient, ApixuException
weather_client = ApixuClient(WEATHER_SECRET)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/weather/')
def weather():
    current = weather_client.getCurrentWeather(q='Erlangen')
    return render_template('weather.html',
                           location=current['location']['name'],
                           icon=current['current']['condition']['icon'],
                           icon_alt=current['current']['condition']['text'],
                           temp=current['current']['temp_c'],
                           wind_kph=current['current']['wind_kph'],
                           precip=current['current']['precip_mm'])
