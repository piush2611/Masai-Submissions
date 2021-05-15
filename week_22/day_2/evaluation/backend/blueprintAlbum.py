from flask import Blueprint, request, json
from server import mysql
# from helper import getArtistId

album = Blueprint('album', __name__)

def getArtistId(name):
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT id FROM artists WHERE artistName = %s """, (name,)
    )
    id = cursor.fetchone()
    cursor.close()
    return id['id']

@album.route('/create', methods=['POST'])
def createAlbum():
    albumName = request.json['albumName']
    year = request.json['year']
    artist = request.json['artist']
    id = getArtistId(artist)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ INSERT INTO albums (albumName, year, artistId) VALUES(%s, %s, %s) """, (albumName, year, id)
    )
    mysql.connection.commit()
    cursor.close()
    return { 'message' : 'Album added to list'}

@album.route('/read', methods=['POST'])
def albumData():
    id = request.json['id']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT albums.id as id,  artistName, albumName, year FROM artists JOIN albums ON artists.id = albums.artistId  WHERE albums.id = %s """, (id,)
    )
    res = cursor.fetchone()
    cursor.close()
    return {'albums' : res }

@album.route('/delete', methods=['DELETE'])
def deleteAlbum():
    id = request.json['id']
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ DELETE FROM albums WHERE id = %s """, (id,)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message" : 'Album Deleted' }

@album.route('/update', methods=['PUT'])
def updateAlbum():
    albumName = request.json['albumName']
    id = request.json['id']
    year = request.json['year']
    artist = request.json['artistName']
    id1 = getArtistId(artist)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ UPDATE albums SET  albumName = %s, year = %s, artistId = %s WHERE albums.id = %s """, (albumName, year, id1, id )
    )
    mysql.connection.commit()
    cursor.close()
    return { 'message' : 'Album updated'}



