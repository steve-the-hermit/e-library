from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, Book
from forms import BookForm
from config import app_config

def create_app(config_name='development'):
    app = Flask(__name__)
    app.config.from_object(app_config[config_name])

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate = Migrate(app, db)

    @app.route('/')
    def homepage_route():
        return '<h1>Default Page</h1>'

    @app.route('/books', methods=['GET', 'POST'])
    def books():
        if request.method == 'GET':
            # Read operation - Retrieve all books
            books = Book.query.all()
            book_list = [{'id': book.book_id, 'book_title': book.book_title, 'author_id': book.book_author_id, 'author_name': book.author.author_name} for book in books]
            return jsonify(book_list)
        elif request.method == 'POST':
            # Create operation - Add a new book
            form = BookForm(request.form)
            if form.validate():
                data = form.data
                new_book = Book(
                    book_title=data['name'],
                    book_author_id=data['author_id'],
                    book_genre_id=data['genre_id']
                )
                db.session.add(new_book)
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
            return jsonify({
                'id': book.book_id,
                'book_title': book.book_title,
                'author_id': book.book_author_id,
                'author_name': book.author.author_name,
                'genre_id': book.book_genre_id
            })
        elif request.method == 'PUT':
            # Update operation - Modify a book
            data = request.json
            book.book_title = data['name']
            book.book_author_id = data['author_id']
            book.book_genre_id = data['genre_id']
            db.session.commit()

            return jsonify({'message': 'Book updated successfully'})
        elif request.method == 'DELETE':
            # Delete operation - Remove a book
            db.session.delete(book)
            db.session.commit()

            return jsonify({'message': 'Book deleted successfully'})

    return app

if __name__ == '__main__':
    app = create_app()
    db.create_all()
    app.run(port=5500, debug=True)
