from flask import Flask 
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

author_genre_association = db.Table('author_genre_association',
    db.Column('author_id', db.Integer, db.ForeignKey('author.author_id')),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.genre_id'))
)

class Author(db.Model):
    tablename = 'author'

author_id = db.Column(db.Integer, primary_key=True)
author_name = db.Column(db.String(250), nullable=False)

books = db.relationship('Book', back_populates='author')
class Book(db.Model):
    tablename = 'book'

book_id = db.Column(db.Integer, primary_key=True)
book_name = db.Column(db.String(250), nullable=False)

author_id = db.Column(db.Integer, db.ForeignKey('author.author_id'))
author = db.relationship('Author', back_populates='books', uselist=False)  

author_name = db.Column(db.String(250))
author_author_id = db.Column(db.Integer)

genres = db.relationship('Genre', secondary=author_genre_association, back_populates='books')
class Genre(db.Model):
    tablename = 'genre'

genre_id = db.Column(db.Integer, primary_key=True)
genre_name = db.Column(db.String(250), nullable=False)

authors = db.relationship('Author', secondary=author_genre_association, back_populates='genres')