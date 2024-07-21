import {rest} from 'msw';

export const handlers = [
  rest.get('https://www.googleapis.com/books/v1/volumes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          {
            id: '1',
            volumeInfo: {
              title: 'Mocked Book 1',
              authors: ['Author 1'],
              description: 'Description 1',
              imageLinks: {
                thumbnail: 'https://via.placeholder.com/150',
              },
            },
          },
          {
            id: '2',
            volumeInfo: {
              title: 'Mocked Book 2',
              authors: ['Author 2'],
              description: 'Description 2',
              imageLinks: {
                thumbnail: 'https://via.placeholder.com/150',
              },
            },
          },
        ],
      }),
    );
  }),
];
