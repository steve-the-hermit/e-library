from faker import Faker
from app import app, db, Author, Book, Genre

fake = Faker()

def create_fake_authors(num_authors):
    authors = []
    for _ in range(num_authors):
        author = Author(author_name=fake.name())
        authors.append(author)
        db.session.add(author)
    db.session.commit()
    return authors

def create_fake_books(authors, num_books_per_author):
    books = []
    for author in authors:
        for _ in range(num_books_per_author):
            book = Book(book_name=fake.catch_phrase(), author=author)
            books.append(book)
            db.session.add(book)
    db.session.commit()
    return books

def create_fake_genres(num_genres):
    genres = []
    for _ in range(num_genres):
        genre = Genre(genre_name=fake.word())
        genres.append(genre)
        db.session.add(genre)
    db.session.commit()
    return genres

if __name__ == '__main__':
    with app.app_context():
        # Adjust these values as needed
        num_fake_authors = 10
        num_books_per_author = 5
        num_fake_genres = 5

        fake_authors = create_fake_authors(num_fake_authors)
        fake_books = create_fake_books(fake_authors, num_books_per_author)
        fake_genres = create_fake_genres(num_fake_genres)

    print("Seed data generated successfully.")
