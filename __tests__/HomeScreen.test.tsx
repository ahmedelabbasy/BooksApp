import React from 'react';
import {render, waitFor, screen} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import HomeScreen from '../src/screens/HomeScreen';
import {server} from '../__mocks__/server';
import {rest} from 'msw';

const queryClient = new QueryClient();

test('renders list of books', async () => {
  render(
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </NavigationContainer>,
  );

  await waitFor(() => screen.getByText('Mocked Book 1'));
  expect(screen.getByText('Mocked Book 1')).toBeTruthy();
  expect(screen.getByText('Mocked Book 2')).toBeTruthy();
});

test('handles API error', async () => {
  server.use(
    rest.get('https://www.googleapis.com/books/v1/volumes', (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );

  const {getByText} = render(
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </NavigationContainer>,
  );

  await waitFor(() => {
    expect(getByText('Author 1')).toBeTruthy();
    expect(getByText('Author 2')).toBeTruthy();
  });
});
