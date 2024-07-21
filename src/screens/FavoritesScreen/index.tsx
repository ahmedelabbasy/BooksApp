import React from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {Book, useFavoritesStore} from '../../store/store';
import BookItem from '../../components/BookItem';

export default function FavoritesScreen() {
  const favorites: Book[] = useFavoritesStore(state => state.favorites);

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.center}>
          <Text>No favorites yet</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item}) => <BookItem book={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    gap: 20,
    marginTop: 20,
  },
});
