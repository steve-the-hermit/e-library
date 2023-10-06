from faker.providers import BaseProvider

class ImageProvider(BaseProvider):
    def random_image_url(self):

        # Generate a random image URL or path (adjust as needed)
        return f"https://example.com/images/{self.random_int(min=1, max=100)}.jpg"