import Test from "../../screns/Test/Index"
import AppElement from "../../screns/AppElement/Index"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreatePost from "../../screns/CreatePost/Index"
import Settings from "../../screns/Settings/Index"
const Stack = createNativeStackNavigator()

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppElement" screenOptions={{ title: "для всех тайтлов" }}>
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ title: "Тестирую" }}
          initialParams={{ itemId: 1, post: "Create Post" }}
        />
        <Stack.Screen name="AppElement" component={AppElement} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routing
