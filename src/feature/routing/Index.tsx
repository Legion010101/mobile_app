import Test from '../../screns/Test/Index';
import AppElement from '../../screns/AppElement/Index';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AppElement'
        screenOptions={{ title: 'для всех тайтлов' }}
      >
        <Stack.Screen
          name='Test'
          component={Test}
          options={{ title: 'Тестирую' }}
          initialParams={{ itemId: 1 }}
        />
        <Stack.Screen name={'Props'} options={{ title: 'props' }}>
          {() => <Test log={1234} />}
        </Stack.Screen>
        <Stack.Screen name='AppElement' component={AppElement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routing;
