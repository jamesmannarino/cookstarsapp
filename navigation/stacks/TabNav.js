import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, UserProfileStack, LeaderboardStack } from './index';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNav(props) {
  const { userInfo, logOut } = props;
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Leaderboard') {
            iconName = 'star';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: { backgroundColor: '#F4F1DE' },
      }}
    >
      <Tab.Screen name='Leaderboard' component={LeaderboardStack} />
      <Tab.Screen name='Home' component={HomeStack} />

      <Tab.Screen name='Profile'>
        {(props) => (
          <UserProfileStack {...props} userInfo={userInfo} logOut={logOut} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}