import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../pages/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <LoginStack></LoginStack>
        </NavigationContainer>
    );
}