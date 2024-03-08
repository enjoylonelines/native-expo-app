import MainScreen  from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import app from './firebase'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name='Main' component={MainScreen} />
          <Stack.Screen name='Screen' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
