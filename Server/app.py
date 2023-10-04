from flask import Flask, request, jsonify, current_app  # Import current_app
from flask_sqlalchemy import SQLAlchemy
from models import db, Book
from forms import BookForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
db = SQLAlchemy(app)

# Define routes and CRUD operations for the Book resource
@app.route('/books', methods=['GET', 'POST'])
def books():
    if request.method == 'GET':
        # Read operation - Retrieve all books
        books = Book.query.all()
        book_list = [{'id': book.book_id, 'name': book.book_name, 'author_id': book.author_id, 'author_name': book.author_name} for book in books]
        return jsonify(book_list)
    elif request.method == 'POST':
        # Create operation - Add a new book
        form = BookForm(request.form)
        if form.validate():
            data = form.data
            new_book = Book(book_name=data['name'], author_id=data['author_id'], author_name=data['author_name'])
            db.session.add(new_book)

            # Use current_app to access the application context
            with current_app.app_context():
                db.session.commit()

            return jsonify({'message': 'Book created successfully'}), 201
        else:
            return jsonify({'error': 'Validation failed', 'errors': form.errors}), 400

@app.route('/books/<int:book_id>', methods=['GET', 'PUT', 'DELETE'])
def book(book_id):
    book = Book.query.get(book_id)
    if book is None:
        return jsonify({'error': 'Book not found'}), 404

    if request.method == 'GET':
        # Read operation - Retrieve a specific book
        return jsonify({'id': book.book_id, 'name': book.book_name, 'author_id': book.author_id, 'author_name': book.author_name})
    elif request.method == 'PUT':
        # Update operation - Modify a book
        data = request.json
        book.book_name = data['name']
        book.author_id = data['author_id']
        book.author_name = data['author_name']

        # Use current_app to access the application context
        with current_app.app_context():
            db.session.commit()

        return jsonify({'message': 'Book updated successfully'})
    elif request.method == 'DELETE':
        # Delete operation - Remove a book

        # Use current_app to access the application context
        with current_app.app_context():
            db.session.delete(book)
            db.session.commit()

        return jsonify({'message': 'Book deleted successfully'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(port=5555, debug=True)
