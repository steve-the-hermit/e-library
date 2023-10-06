
from classes.models import Author, Genre, Book
from faker import Faker
from classes.app import create_app, db
import random
from datetime import datetime
from classes.config import app_config
from custom_providers import ImageProvider

fake = Faker()
fake.add_provider(ImageProvider)
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
                book_genre_id=random_genre.genre_id,
                book_image_url=fake.random_image_url()           )
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


# from classes.models import Author, Genre, Book
# from faker import Faker
# from classes.app import create_app, db
# import random
# from datetime import datetime
# from classes.config import app_config

# fake = Faker()
# app = create_app()  # Call create_app to initialize the Flask app

# # Function to generate random birth dates for authors
# def generate_random_birth_date():
#     year = random.randint(1900, 2000)
#     month = random.randint(1, 12)
#     day = random.randint(1, 28)
#     return datetime(year, month, day)

# def create_data():
#     with app.app_context():  # Enter the Flask app context
#         print("Seeding data...")
#         authors = Author.query.all()
#         genres = Genre.query.all()
#         books = []

#         if not authors or not genres:
#             print("No authors or genres found in the database. Make sure to seed authors and genres first.")
#             return

#         # Create books with random authors and genres
#         for _ in range(50):
#             random_author = random.choice(authors)
#             random_genre = random.choice(genres)
#             book = Book(
#                 book_title=fake.sentence(nb_words=3),
#                 book_publication_year=random.randint(1950, 2023),
#                 book_author_id=random_author.author_id,
#                 book_genre_id=random_genre.genre_id
#             )
#             books.append(book)

#         # Add data to the database
#         db.session.add_all(books)
#         db.session.commit()

#         print("Data seeding complete.")

# if __name__ == "__main__":
#     create_data()
#     print("Data seeded successfully.")
