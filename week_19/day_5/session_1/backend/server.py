from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL(app)

app.config['MYSQL_USER'] = 'charlie'
app.config['MYSQL_PASSWORD'] = 'charlie'
app.config['MYSQL_DB'] = 'tasksListManager'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

from blueprintUsers import user
from blueprintList import list
from blueprintTasks import task

app.register_blueprint(user, url_prefix = '/user')
app.register_blueprint(list, url_prefix = '/list')
app.register_blueprint(task, url_prefix = "/task")

@app.route('/')
def home():
    return "home"