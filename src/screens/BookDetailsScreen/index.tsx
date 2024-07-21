import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/homeStack';
import {useFavoritesStore} from '../../store/store';
import FastImage from 'react-native-fast-image';
import {Book_Placeholder} from '../../assets';

type Props = NativeStackScreenProps<RootStackParamList, 'BookDetails'>;

export default function BookDetailsScreen({route}: Props) {
  const {book} = route.params;
  const {addFavorite, removeFavorite, favorites} = useFavoritesStore();
  const isFavorite = favorites.some(fav => fav.id === book.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={{
            uri: book.image,
            priority: FastImage.priority.normal,
          }}
          defaultSource={Book_Placeholder}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.description}>{book.description}</Text>
        <TouchableOpacity onPress={handleFavoriteToggle}>
          <Text style={styles.favoriteButton}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f2ff',
  },
  container: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 150,
    height: 220,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  favoriteButton: {
    color: '#1E90FF',
    marginTop: 10,
  },
});
