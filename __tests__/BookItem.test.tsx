import React from 'react';
import {render} from '@testing-library/react-native';
import BookItem from '../src/components/BookItem';

test('renders book item correctly', () => {
  const mockBook = {
    id: '1',
    title: 'Test Book',
    author: 'Author Name',
    image: 'https://example.com/image.jpg',
    description: 'This is a test book description.',
  };

  const {getByText} = render(<BookItem book={mockBook} onPress={() => {}} />);

  expect(getByText('Test Book')).toBeTruthy();
  expect(getByText('Author Name')).toBeTruthy();
});
