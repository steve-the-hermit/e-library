import random
from datetime import datetime
from faker import Faker
from app import app, db  #
from models import Author, Genre, Book

fake = Faker()

# Function to generate random birth dates for authors
def generate_random_birth_date():
    year = random.randint(1900, 2000)
    month = random.randint(1, 12)
    day = random.randint(1, 28)
    return datetime(year, month, day)

# Function to create authors, genres, and books
def create_data():
    app.app_context().push()  

    authors = []
    genres = []
    books = []

    # Create authors
    for _ in range(50):
        author = Author(
            author_name=fake.name(),
            author_birth_date=generate_random_birth_date()
        )
        authors.append(author)

    # Create genres
    genres_data = ["Fiction", "Non-Fiction", "Science Fiction", "Mystery", "Romance", "Fantasy", "Biography", "History"]
    for genre_name in genres_data:
        genre = Genre(genre_name=genre_name)
        genres.append(genre)

    # Create books with random authors and genres
    for _ in range(50):
        book = Book(
            book_title=fake.sentence(nb_words=3),
            book_publication_year=random.randint(1950, 2023),
            book_author_id=random.choice(authors).author_id,
            book_genre_id=random.choice(genres).genre_id
        )
        books.append(book)

    # Add data to the database
    db.session.add_all(authors)
    db.session.add_all(genres)
    db.session.add_all(books)
    db.session.commit()

if __name__ == "__main__":
    create_data()
    print("Data seeded successfully.")
