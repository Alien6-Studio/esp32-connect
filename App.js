import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Home from './component/Home/Home';
import Info from './component/Info/Info';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <View style={{
      height: '100%',
      backgroundColor: "#94c438"
    }}>
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: "#fff", 
            tabBarInactiveBackgroundColor: "#dfdfdf",
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                case "Accueil":
                  return (<Image source={require('./assets/home-icon.png')} style={{ width: 25, height: 25 }} />)
                case "Information":
                  return (<Image source={require('./assets/info-icon.png')} style={{ width: 25, height: 25 }} />)
                default:
                  return (<Image source={require('./assets/home-icon.png')} style={{ width: 25, height: 25 }} />)
              }
            }
          })
          }
        >
          <Tab.Screen name="Accueil" component={Home} />
          <Tab.Screen name="Information" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}


const style = StyleSheet.create({
  row: {
    color: "black",
  }
})