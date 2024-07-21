import {create} from 'zustand';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
}

interface FavoritesStore {
  favorites: Book[];
  addFavorite: (book: Book) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>(set => ({
  favorites: [],
  addFavorite: book => set(state => ({favorites: [...state.favorites, book]})),
  removeFavorite: id =>
    set(state => ({favorites: state.favorites.filter(book => book.id !== id)})),
}));
