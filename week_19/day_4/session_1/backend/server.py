from flask import Flask
from flask_mysqldb import MySQL
app = Flask(__name__)

app.config['MYSQL_USER'] = 'charlie'
app.config['MYSQL_PASSWORD'] = 'charlie'
app.config['MYSQL_DB'] = 'library'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

from blueprintBooks import books
from blueprintAuhtor import authors
from blueprintCategory import category
app.register_blueprint(books, url_prefix='/book')
app.register_blueprint(authors, url_prefix='/author')
app.register_blueprint(category, url_prefix='/category')


@app.route('/')
def home():
    return "Home"

