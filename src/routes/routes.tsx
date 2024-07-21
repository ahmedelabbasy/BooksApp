import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';

export type BottomTabParamList = {
  HomeStack: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName = 'help-circle-outline';

  if (routeName === 'HomeStack') {
    iconName = 'home-outline';
  } else if (routeName === 'Favorites') {
    iconName = 'heart-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => getTabBarIcon(route.name, color, size),
        headerStyle: {backgroundColor: '#e6f2ff'},
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{tabBarLabel: 'Home', headerShown: false}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{tabBarLabel: 'Favorites'}}
      />
    </Tab.Navigator>
  );
}
