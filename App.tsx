import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import GuessTheCountryScreen from './src/screens/GuessTheCountryScreen';
import MainNavigator from './src/navigator/MainNavigator';

import WinScreen from './src/screens/WinScreen';
const App = () => {
return (
<SafeAreaProvider>
  <MainNavigator/>
</SafeAreaProvider>
)
};
export default App;