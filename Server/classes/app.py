# from flask import Flask, request, jsonify, current_app  # Import current_app
# from flask_sqlalchemy import SQLAlchemy
# from .models import db, Book
# from .forms import BookForm
# from flask_migrate import Migrate
# from sqlalchemy import MetaData, create_engine


# def create_app(config_name='development'):

#     # Initialize extensions with the app
    
#     app = Flask(__name__)
#     app.config.from_object(f'config.{config_name}')

#     app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
#     app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#     db = SQLAlchemy(app)
#     db.init_app(app)
#     migrate = Migrate(app,db)

#     # Create a MetaData object and associate it with your models
#     metadata = MetaData()


#     engine = create_engine("sqlite:///books.db")
#     metadata.bind = engine
#     metadata.reflect(bind=db.engine) 
    
#     # Define routes and CRUD operations for the Book resource
#     if config_name == 'production':
#         app.config.from_object('config.ProductionConfig')
#     else:
#         app.config.from_object('config.DevelopmentConfig')

#     @app.route('/books', methods=['GET', 'POST'])
#     def books():
#         if request.method == 'GET':
#             # Read operation - Retrieve all books
#             books = Book.query.all()
#             book_list = [{'id': book.book_id, 'name': book.book_name, 'author_id': book.author_id, 'author_name': book.author_name} for book in books]
#             return jsonify(book_list)
#         elif request.method == 'POST':
#             # Create operation - Add a new book
#             form = BookForm(request.form)
#             if form.validate():
#                 data = form.data
#                 new_book = Book(book_name=data['name'], author_id=data['author_id'], author_name=data['author_name'])
#                 db.session.add(new_book)

#                 # Use current_app to access the application context
#                 with current_app.app_context():
#                     db.session.commit()

#                 return jsonify({'message': 'Book created successfully'}), 201
#             else:
#                 return jsonify({'error': 'Validation failed', 'errors': form.errors}), 400

#     @app.route('/books/<int:book_id>', methods=['GET', 'PUT', 'DELETE'])
#     def book(book_id):
#         book = Book.query.get(book_id)
#         if book is None:
#             return jsonify({'error': 'Book not found'}), 404

#         if request.method == 'GET':
#             # Read operation - Retrieve a specific book
#             return jsonify({'id': book.book_id, 'name': book.book_name, 'author_id': book.author_id, 'author_name': book.author_name})
#         elif request.method == 'PUT':
#             # Update operation - Modify a book
#             data = request.json
#             book.book_name = data['name']
#             book.author_id = data['author_id']
#             book.author_name = data['author_name']

#             # Use current_app to access the application context
#             with current_app.app_context():
#                 db.session.commit()

#             return jsonify({'message': 'Book updated successfully'})
#         elif request.method == 'DELETE':
#             # Delete operation - Remove a book

#             # Use current_app to access the application context
#             with current_app.app_context():
#                 db.session.delete(book)
#                 db.session.commit()

#             return jsonify({'message': 'Book deleted successfully'})
        

#     if __name__ == '__main__':
#         with app.app_context():
#             db.create_all()
#         app.run(port=5555, debug=True)
#     return app
from flask import Flask, request, jsonify, current_app
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .models import db, Book
from .forms import BookForm
from .config import app_config


def create_app(config_name='development'):
    app = Flask(__name__)
    app.config.from_object(app_config[config_name])

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
    # app.config['SECRET_KEY'] = 'mysecretkey'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    # db = SQLAlchemy(app)
    db.init_app(app)

    # Initialize Flask-Migrate
    migrate = Migrate(app, db)

    # Define routes and CRUD operations for the Book resource
    @app.route('/')
    def homepage_route():
        return '<h1>Default Page</h1>'

    @app.route('/books', methods=['GET', 'POST'])
    def books():
        if request.method == 'GET':
            # Read operation - Retrieve all books
            books = Book.query.all()
            book_list = [{'id': book.book_id, 'book_title': book.book_title, 'author_id': book.author_id, 'author_name': book.author_name} for book in books]
            return jsonify(book_list)
        elif request.method == 'POST':
            # Create operation - Add a new book
            form = BookForm(request.form)
            if form.validate():
                data = form.data
                new_book = Book(book_title=data['name'], author_id=data['author_id'], author_name=data['author_name'])
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
            return jsonify({'id': book.book_id, 'name': book.book_title, 'author_id': book.author_id, 'author_name': book.genre_id})
        elif request.method == 'PUT':
            # Update operation - Modify a book
            data = request.json
            book.book_name = data['name']
            book.author_id = data['author_id']
            book.author_name = data['author_name']
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
            