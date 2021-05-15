from flask import Flask
from blueprint_address import addressBook
from blueprint_user import user
app = Flask(__name__)

app.register_blueprint(addressBook, url_prefix='/address')
app.register_blueprint(user, url_prefix="/user")