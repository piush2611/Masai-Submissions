from flask import Blueprint
from server import mysql
from flask import request, json
from helper import *
books = Blueprint('books', __name__)

@books.route('/create', methods=['POST'])
def addNewBook():
    bookname = request.json['bookname']
    publisher = request.json['publisher']
    authors = request.json['authors']
    categories = request.json['categories']
    cursor = mysql.connection.cursor()

    cursor.execute(
        """ INSERT INTO books (bookname, publisher) VALUES(%s, %s) """, (bookname, publisher)
    )
    
    book = getBookId(bookname)
    bookId = book['id']

    for author in authors:
        cursor.execute(
            """ INSERT INTO authors (authorname, bookId) VALUES (%s, %s) """, (author, bookId)
        )
    
    for ctg in categories:
        cursor.execute(
            """ INSERT INTO categories (category, bookId) VALUES (%s, %s) """, (ctg, bookId)
        )

    mysql.connection.commit()
    cursor.close()

    return { 'message' : 'book added'}

@books.route('/read')
def getAllBooks():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """ SELECT books.id, bookname, publisher, GROUP_CONCAT( DISTINCT authorname) AS authors, GROUP_CONCAT( DISTINCT category ) AS ctgs FROM books JOIN authors ON books.id = authors.bookid JOIN categories ON books.id = categories.bookId GROUP BY books.id """
    )

    res = cursor.fetchall()
    cursor.close()
    return { 'books' : getData(res)}

@books.route('/read/<input>')
def getBookByAuthor(input):
    
    cursor = mysql.connection.cursor()

    cursor.execute(
        """ SELECT books.id, bookname, publisher, GROUP_CONCAT( DISTINCT authorname) AS authors, GROUP_CONCAT( DISTINCT category ) AS ctgs FROM books JOIN authors ON books.id = authors.bookid JOIN categories ON books.id = categories.bookId WHERE bookname = %s GROUP BY books.id UNION SELECT books.id, bookname, publisher, GROUP_CONCAT( DISTINCT authorname) AS authors, GROUP_CONCAT( DISTINCT category ) AS ctgs FROM books JOIN authors ON books.id = authors.bookid JOIN categories ON books.id = categories.bookId WHERE authorname = %s GROUP BY books.id UNION  SELECT books.id, bookname, publisher, GROUP_CONCAT( DISTINCT authorname) AS authors, GROUP_CONCAT( DISTINCT category ) AS ctgs FROM books JOIN authors ON books.id = authors.bookid JOIN categories ON books.id = categories.bookId WHERE category = %s GROUP BY books.id UNION SELECT books.id, bookname, publisher, GROUP_CONCAT( DISTINCT authorname) AS authors, GROUP_CONCAT( DISTINCT category ) AS ctgs FROM books JOIN authors ON books.id = authors.bookid JOIN categories ON books.id = categories.bookId WHERE publisher = %s GROUP BY books.id  """, (input,input, input, input)
    )
    res = cursor.fetchall()
    cursor.close()
    if len(res) > 0 :
        return { 'books' : getData(res)}
    else :
        return { 'message' : 'Not Found', 'notFound' : 'true'}