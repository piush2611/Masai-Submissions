from flask import Blueprint, request, json
from server import mysql
artist = Blueprint("artist",__name__ )

@artist.route('/read')
def listAllArtist():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT GROUP_CONCAT(artistName) AS artists FROM artists """ 
    )
    res = cursor.fetchall()
    res =  res[0]['artists'].split(',')

    return { 'artists' : res }

@artist.route('/create', methods=['POST'])
def createArtist():
    artist = request.json['artist']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO artists (artistName) VALUES (%s) """, (artist,)
    )
    mysql.connection.commit()
    cursor.close()
    return { 'message' : 'Artist added'}
