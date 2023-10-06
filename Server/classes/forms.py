
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, validators
from .models import Author

class BookForm(FlaskForm):
    name = StringField('Book Name', [validators.Length(min=1, max=250), validators.DataRequired()])
    author_id = IntegerField('Author ID', [validators.DataRequired()])
    author_name = StringField('Author Name', [validators.Length(min=1, max=250), validators.DataRequired()])

    def validate_author_id(form, field):
        # Check if the author_id provided exists in the database
        author = Author.query.get(field.data)
        if not author:
            raise validators.ValidationError('Author with this ID does not exist.')

    def validate_name(form, field):
        # Check if the book name is unique
        existing_book = Book.query.filter_by(book_name=field.data).first()
        if existing_book:
            raise validators.ValidationError('A book with this name already exists.')

    def validate_author_name(form, field):
        # Check if the author name matches the author_id
        author = Author.query.get(form.author_id.data)
        if author and author.author_name != field.data:
            raise validators.ValidationError('Author name does not match the provided author ID.')