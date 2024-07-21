import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  BookDetails: {
    book: {
      id: string;
      title: string;
      author: string;
      description: string;
      image: string;
    };
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#e6f2ff'},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
}
