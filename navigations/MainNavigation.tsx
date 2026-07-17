import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import ScoreScreen from '../screens/ScoreScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Score" component={ScoreScreen} />

        </Stack.Navigator>
    );
} 

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Game" component={GameScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
    </Tab.Navigator>
  );
}

export function MainNavigator(){
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}