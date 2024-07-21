import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Book, useFavoritesStore} from '../store/store';
import FastImage from 'react-native-fast-image';
import {Book_Placeholder} from '../assets';

interface BookItemProps {
  book: Book;
  onPress?: () => void;
}

export default function BookItem({book, onPress = () => {}}: BookItemProps) {
  const addFavorite = useFavoritesStore(state => state.addFavorite);
  const removeFavorite = useFavoritesStore(state => state.removeFavorite);
  const favorites = useFavoritesStore(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === book.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <FastImage
        style={styles.image}
        source={{
          uri: book.image,
          priority: FastImage.priority.normal,
        }}
        defaultSource={Book_Placeholder}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <TouchableOpacity onPress={handleFavoriteToggle}>
          <Text style={styles.favoriteButton}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 10,
    backgroundColor: '#ccc', // Add a background color to show if the image fails to load
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    color: '#1E90FF',
    marginTop: 10,
  },
});
