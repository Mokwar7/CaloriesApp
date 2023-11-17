import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main'
import { StatusBar } from 'expo-status-bar';
import CounterBlock from './Counter';
import AddFood from './AddFood';

export default function App() {
  const Stack = createNativeStackNavigator();

  function onClickTest() {
    console.log('s')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Adding_food" component={AddFood} />
      </Stack.Navigator>
      <StatusBar theme='auto'/>
    </NavigationContainer>
  );
}
