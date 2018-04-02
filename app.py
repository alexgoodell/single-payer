
# ---------------------------------- Import -----------------------------------
from flask import Flask


# -------------------------- Flask-specific details ---------------------------
# flask is a python package for making web pages
# we use this little currently, but is helpful

from flask import Flask, render_template, session, redirect, url_for, flash
app = Flask(__name__)

app.config['SECRET_KEY'] = 'x3432d3232432lkjew3242'
# allows for debuging mode in runserver
app.config['DEBUG'] = True 

from flask_script import Manager, Shell
manager = Manager(app)


# ---------------------------------- Routes -----------------------------------

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/questions')
def questions():
    return render_template('questions.html')
