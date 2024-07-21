This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# MyApp

MyApp is a React Native application that allows users to browse a list of books, view book details, and add books to their favorites. The app fetches data from the Google Books API and implements performance optimizations including lazy loading for book images.

## Features

- Browse a list of books
- Search books by title or author
- View detailed information about a book
- Add or remove books from favorites
- Smooth navigation and fast rendering of book lists
- Performance optimizations including lazy loading for book images

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/myApp.git

## Project Structure

   ```sh
   myApp/
   ├── android/
   ├── ios/
   ├── src/
   │   ├── api/
   │   │   └── books.ts
   │   ├── assets/
   │   │   ├── images/
   │   │   │   └── book-placeholder.png
   │   │   └── index.tsx
   │   ├── components/
   │   │   └── BookItem.tsx
   │   ├── routes/
   │   │   └── routes.tsx
   │   │   └── homeStack.tsx
   │   ├── screens/
   │   │   ├── HomeScreen/
   │   │   │   └── index.tsx
   │   │   ├── BookDetailsScreen/
   │   │   │   └── index.tsx
   │   │   └── FavoritesScreen/
   │   │       └── index.tsx
   │   ├── store/
   │   │   └── store.tsx
   │   └── App.tsx
   ├── __tests__/
   │   ├── App.test.tsx
   │   ├── BookItem.test.tsx
   │   └── HomeScreen.test.tsx
   ├── __mocks__/
   │   ├── server.ts
   │   ├── handlers.ts
   │   └── setupTests.ts
   ├── .babelrc
   ├── package.json
   ├── index.tsx
   ├── tsconfig.json
   ├── jest.config.js
   ├── jest.setup.js
   ├── babel.config.js
   └── README.md

## API

   ```sh
   The app fetches book data from the Google Books API. The API interaction is managed in the src/api/books.ts file.

## Performance Optimizations

   ```sh
   Lazy Loading: Book images are loaded lazily to improve performance.
   FlatList: Used for rendering the list of books to ensure smooth scrolling and performance.

## Acknowledgements

   React Native
   Google Books API
   React Query
   MSW (Mock Service Worker)
   Jest
   React Native Testing Library

