import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {useQuery} from 'react-query';
import {GetBooks} from '../../api/books';
import BookItem from '../../components/BookItem';
import {Book} from '../../store/store';
import {RootStackParamList} from '../../routes/homeStack';

export default function HomeScreen() {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  const {data, isLoading, error} = useQuery('books', GetBooks);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks: Book[] = data?.filter(
    (book: Book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching books</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="What would you like to read?"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={book => book.id}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <BookItem
            book={item}
            onPress={() => navigation.navigate('BookDetails', {book: item})}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  searchInput: {
    margin: 20,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 25,
    gap: 20,
  },
});
