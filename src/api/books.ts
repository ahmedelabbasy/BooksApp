import axios from 'axios';

export const GetBooks = async () => {
  const response = await axios.get(
    'https://www.googleapis.com/books/v1/volumes?q=react-native',
  );
  return response.data.items.map((item: any) => ({
    id: item.id,
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors?.[0] || 'Unknown Author',
    description: item.volumeInfo.description,
    image:
      item.volumeInfo.imageLinks?.thumbnail.replace(
        /^http:\/\//i,
        'https://',
      ) || '',
    // Ensure HTTPS
  }));
};
