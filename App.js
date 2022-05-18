import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';

//react-redux
import {Provider} from 'react-redux';
//store
import store from './store';
//import navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import assets
import {screens} from './common/Contant';

//import Screen
import CustomBottomTab from './common/Tab';
import DetailScreen from './screen/detail/DetailScreen';
import MapScreen from './screen/map/MapScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={screens.tab_home} component={CustomBottomTab} />
          <Stack.Screen name={screens.detail} component={DetailScreen} />
          <Stack.Screen name={screens.map} component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
