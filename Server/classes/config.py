# config.py

import os

class Config:
    # Define your SQLAlchemy database URL or connection settings here
    SQLALCHEMY_DATABASE_URI = 'sqlite:///books.db' 
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable SQLAlchemy modification tracking
    SECRET_KEY = 'your_secret_key'  # Replace with a secret key for your app

# Create different configuration classes for development, production, and testing
class DevelopmentConfig(Config):
    DEBUG = True
    # Add other development-specific settings here if needed

class ProductionConfig(Config):
    DEBUG = False
    # Add other production-specific settings here if needed

class TestingConfig(Config):
    TESTING = True
    # Add other testing-specific settings here if needed

# Set the default configuration class for your app
config_name = os.environ.get('FLASK_ENV', 'development')  # Default to development
app_config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
}
