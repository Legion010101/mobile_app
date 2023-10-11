import Test from "../../screns/Test/Index"
import AppElement from "../../screns/AppElement/Index"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CreatePost from "../../screns/CreatePost/Index"
import Settings from "../../screns/Settings/Index"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import LogoTitle from "../../shared/ui/Logo"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppElement"
        screenOptions={{
          title: "для всех тайтлов",
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen
          name="Test"
          component={Test}
          options={({ route }) => ({ title: route.params.post || "123" })}
          initialParams={{ itemId: 1, post: "Create Post" }}
        />
        <Stack.Screen name="AppElement" component={AppElement} />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "setting",
            headerStyle: {
              backgroundColor: "#f4511e"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routing

type RootStackParamList = {
  Test: { itemId?: number; post: string }
  AppElement: undefined
  CreatePost: { userId: number } | undefined
  Settings: { userId: string }
}
export type PropsTest = NativeStackScreenProps<RootStackParamList, "Test">
export type PropsAppElement = NativeStackScreenProps<RootStackParamList, "AppElement">
