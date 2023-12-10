import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

// Import your tab screens from the "tabs" folder
import Explore from './(tabs)/explore';
import Inbox from './(tabs)/inbox';
import ProfileTab from './(tabs)/profile';
import Trips from './(tabs)/trips';
import Wishlists from './(tabs)/wishlists';

import Signup from './auth/signup';
import Login from './auth/login';
import SignedIn from './auth/signedIn';

import Explore1 from './(tabs)/explore1';
import Explore2 from './(tabs)/explore2';
import Explore3 from './(tabs)/explore3';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const ExploreStack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'red', // Customize the active tab color
      tabBarInactiveBackgroundColor: 'white', // Customize the inactive tab color
    }}
    >

      <Tab.Screen 
        name="Explore" 
        component={ExploreNavigator} 
        options={{ 
          tabBarLabel: 'Explore', 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
          }} />

      <Tab.Screen 
        name="Wishlists" 
        component={Wishlists} 
        options={{ 
          tabBarLabel: 'Wishlists',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
           }} />

      <Tab.Screen 
        name="Trips" 
        component={Trips} 
        options={{ 
          tabBarLabel: 'Trips' ,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="car" size={size} color={color} />
          ),
          }} />

      <Tab.Screen 
        name="Inbox" 
        component={Inbox} 
        options={{ 
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbox-outline" size={size} color={color} />
          ),
          }} />

      <Tab.Screen 
        name="Profile" 
        component={AuthNavigator} 
        options={{ 
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
          }} />

    </Tab.Navigator>
    )
  }

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="ProfileScreen" component={ProfileTab} options={{title: "Profile"}} />
      <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <AuthStack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <AuthStack.Screen name="SignedIn" component={SignedIn} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}

function shareButton() {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name="share-outline" size={25}/>
      <Ionicons name="heart-outline" size={25}/>
    </View>
  )
}

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="ExploreMain" component={Explore} options={{headerShown: false}}/>
      <ExploreStack.Screen name="Explore1" component={Explore1} options={{title: "", headerRight: () => shareButton()}}/>
      <ExploreStack.Screen name="Explore2" component={Explore2} options={{title: "", headerRight: () => shareButton()}}/>
      <ExploreStack.Screen name="Explore3" component={Explore3} options={{title: "", headerRight: () => shareButton()}}/>
    </ExploreStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});
