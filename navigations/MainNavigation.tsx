import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScoreScreen from '../screens/ScoreScreen';

import RegistroScreen from '../screens/RegistroScreen';
import LoginScreen from '../screens/LoginScreen';

import { Ionicons } from "@expo/vector-icons";
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
            
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: "#1B1B1B",
                    borderTopWidth: 3,
                    borderTopColor: "#6B3E06",
                    height: 70,
                    paddingTop: 8,
                    paddingBottom: 8,
                },

                tabBarActiveTintColor: "#FFD700",
                tabBarInactiveTintColor: "#BDBDBD",

                tabBarLabelStyle: {
                    fontFamily: "Minecraft",
                    fontSize: 10,
                },
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Game"
                component={GameScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="game-controller" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Score"
                component={ScoreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trophy" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
            

        </Tab.Navigator>
        
    );
}

export function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}