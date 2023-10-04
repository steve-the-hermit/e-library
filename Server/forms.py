from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, validators

class BookForm(FlaskForm):
    name = StringField('Book Name', [validators.Length(min=1, max=250)])
    author_id = IntegerField('Author ID', [validators.DataRequired()])
    author_name = StringField('Author Name', [validators.Length(min=1, max=250)])
