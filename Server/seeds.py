# from classes.app import create_app, db
# from classes.models import Author, Genre, Book
# from faker import Faker
# from classes.app import create_app, db
# import random
# from datetime import datetime
# from classes.config import app_config

# fake = Faker()
# app = create_app

# # Function to generate random birth dates for authors
# def generate_random_birth_date():
#     year = random.randint(1900, 2000)
#     month = random.randint(1, 12)
#     day = random.randint(1, 28)
#     return datetime(year, month, day)

# # Function to create authors, genres, and books
# def create_data(app):
#     with app.app_context():  # Enter the Flask app context
#         print("Seeding data...")
#         authors = []
#         genres = []
#         books = []

#         # Create authors
#         for _ in range(50):
#             author = Author(
#                 author_name=fake.name(),
#                 author_birth_date=generate_random_birth_date()
#             )
#             authors.append(author)

#         # Create genres
#         genres_data = ["Fiction", "Non-Fiction", "Science Fiction", "Mystery", "Romance", "Fantasy", "Biography", "History"]
#         for genre_name in genres_data:
#             genre = Genre(genre_name=genre_name)
#             genres.append(genre)

#         # Create books with random authors and genres
#         for _ in range(50):
#             book = Book(
#                 book_title=fake.sentence(nb_words=3),
#                 book_publication_year=random.randint(1950, 2023),
#                 book_author_id=random.choice(authors).author_id,
#                 book_genre_id=random.choice(genres).genre_id
#             )
#             books.append(book)

#         # Add data to the database
#         db.session.add_all(authors)
#         db.session.add_all(genres)
#         db.session.add_all(books)
#         db.session.commit()

#         print("Data seeding complete.")

# # if __name__ == "__main__":
# #     app = create_app()  # Call create_app to initialize the Flask app
# #     if app is not None:
# #         with app.app_context():
# #             db.create_all()
# #         create_data(app)
# #         print("Data seeded successfully.")
# #     else:
# #         print("Flask app is not properly initialized.")
# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#     create_data()
#     print("Data seeded successfully.")
from classes.models import Author, Genre, Book
from faker import Faker
from classes.app import create_app, db
import random
from datetime import datetime
from classes.config import app_config

fake = Faker()
app = create_app()  # Call create_app to initialize the Flask app

# Function to generate random birth dates for authors
def generate_random_birth_date():
    year = random.randint(1900, 2000)
    month = random.randint(1, 12)
    day = random.randint(1, 28)
    return datetime(year, month, day)

def create_data():
    with app.app_context():  # Enter the Flask app context
        print("Seeding data...")
        authors = Author.query.all()
        genres = Genre.query.all()
        books = []

        if not authors or not genres:
            print("No authors or genres found in the database. Make sure to seed authors and genres first.")
            return

        # Create books with random authors and genres
        for _ in range(50):
            random_author = random.choice(authors)
            random_genre = random.choice(genres)
            book = Book(
                book_title=fake.sentence(nb_words=3),
                book_publication_year=random.randint(1950, 2023),
                book_author_id=random_author.author_id,
                book_genre_id=random_genre.genre_id
            )
            books.append(book)

        # Add data to the database
        db.session.add_all(books)
        db.session.commit()


        print("Data seeding complete.")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    create_data()
    print("Data seeded successfully.")
