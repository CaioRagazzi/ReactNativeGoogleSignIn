import React, { useContext } from 'react';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';

import { Avatar } from "native-base";

import { AuthContext } from "../contexts/auth";

const Stack = createNativeStackNavigator();

function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeStack} />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent(props) {
    const { logout } = useContext(AuthContext)
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ height: '80%'}}>
                <Avatar bg="green.500" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}></Avatar>
            </View>



            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => logout()}
            />
        </DrawerContentScrollView>
    );
}


export default function Navigation() {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {
                isLoggedIn ?
                    <AppDrawer></AppDrawer>
                    :
                    <LoginStack></LoginStack>
            }
        </NavigationContainer>
    );
}