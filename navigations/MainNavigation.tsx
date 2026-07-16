import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import ScoreScreen from '../screens/ScoreScreen';
import { NavigationContainer } from '@react-navigation/native';

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

export function MainNavigator(){
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}