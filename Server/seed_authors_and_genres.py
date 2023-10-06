from classes.models import Author, Genre
from classes.app import create_app, db
from faker import Faker
import random
from datetime import datetime

fake = Faker()
app = create_app()

# Function to generate random birth dates for authors
def generate_random_birth_date():
    year = random.randint(1900, 2000)
    month = random.randint(1, 12)
    day = random.randint(1, 28)
    return datetime(year, month, day)

# Function to create authors and genres
def create_authors_and_genres():
    with app.app_context():
        print("Seeding authors and genres...")
        authors = []
        genres_data = ["Fiction", "Non-Fiction", "Science Fiction", "Mystery", "Romance", "Fantasy", "Biography", "History"]
        genres = [Genre(genre_name=genre_name) for genre_name in genres_data]

        for _ in range(50):
            author = Author(
                author_name=fake.name(),
                author_birth_date=generate_random_birth_date()
            )
            authors.append(author)

        db.session.add_all(authors)
        db.session.add_all(genres)
        db.session.commit()

        print("Authors and genres seeded successfully.")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    create_authors_and_genres()
