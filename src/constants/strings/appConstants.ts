// APP_CONSTANTS.js
const APP_CONSTANTS = {
  LABELS: {
    HOME: 'Home',
    PLAY: 'Play',
    CATEGORY: 'Category',
    USER: 'User',
    TROLLEY: 'Cart', // Consider renaming to 'CART' if it's for consistency
  },

  SETTINGS: {
    DEFAULT_LANGUAGE: 'en', // Default language
    THEME: 'light', // Theme settings (light/dark)
  },

  API: {
    BASE_URL: 'https://api.example.com', // Example API URL
    TIMEOUT: 5000, // Timeout in ms
  },

  CONSTANDA: {
    SOME_KEY: 'someValue', // Example key-value
    ANOTHER_KEY: 'anotherValue', // Another key-value
  },

  HOME_SCREEN_CONSTANTS: {
    CATEGORIES: [
      'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Meat', 'Seafood', 'Grains', 'Poultry', 'Livestock', 'Spices', 'Herbs', 'Pulses', 'Seeds', 'Flowers', 'Honey',
    ],
    NAV_BUTTONS: ['Home', 'Play', 'Category', 'User', 'Cart'], // Navigation buttons
    INITIAL_ITEMS: ['Item 1', 'Item 2', 'Item 3'], // Placeholder items
    ADDRESS: '123 Main Street, Cityville', // Address for the home screen
  },
};

export default APP_CONSTANTS;
