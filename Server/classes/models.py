

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Author(db.Model):
    author_id = db.Column(db.Integer, primary_key=True)
    author_name = db.Column(db.String(255), nullable=False)
    author_birth_date = db.Column(db.Date)

    # Relationship to books
    books = db.relationship('Book', backref='author', lazy=True)

    def __str__(self):
        return f"Author: {self.author_name}, Born: {self.author_birth_date}"

# Define Genre model
class Genre(db.Model):
    genre_id = db.Column(db.Integer, primary_key=True)
    genre_name = db.Column(db.String(255), nullable=False)

    # Relationship to books
    books = db.relationship('Book', backref='genre', lazy=True)

    def __str__(self):
        return f"Genre: {self.genre_name}"

# Define Book model
class Book(db.Model):
    book_id = db.Column(db.Integer, primary_key=True)
    book_title = db.Column(db.String(255), nullable=False)
    book_publication_year = db.Column(db.Integer)
    book_author_id = db.Column(db.Integer, db.ForeignKey('author.author_id'), nullable=False)
    book_genre_id = db.Column(db.Integer, db.ForeignKey('genre.genre_id'), nullable=False)

    def __str__(self):
        return f"Book: {self.book_title}, Author: {self.author.author_name}, Genre: {self.genre.genre_name}, Year: {self.book_publication_year}"
