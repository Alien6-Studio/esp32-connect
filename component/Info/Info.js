import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import About from './About';
import Charte from './Charte';
import Legal from './Legal';
import FAQ from './FAQ';


const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="A propos de nous" component={About} />
            <Stack.Screen name="Charte du respect de la vie privée" component={Charte} />
            <Stack.Screen name="Mentions légales" component={Legal} />
            <Stack.Screen name="FAQ" component={FAQ} />
        </Stack.Navigator>
    );
}