import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import ProfileScreen from './screens/Profile'
import ExploreScreen from './screens/Explore';
import HomeScreen from './screens/Home';
import NotificationScreen from './screens/Notification';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Explore') {
            iconName = 'magnify';
          } else if (route.name === 'Notifications') {
            iconName = 'bell';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFFFF',  
        tabBarInactiveTintColor: '#A9A9A9', 
        tabBarStyle: {
          backgroundColor: '#1A1A1B',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} /> 
      <Tab.Screen name="Profile" component={ProfileScreen} /> 
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MyTabs />
    </NavigationContainer>
  );
}
