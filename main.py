from flask import Flask, render_template, request
import os
import json
from app import app

import views

if __name__ == '__main__':
    app.run()
