import React from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"

const Settings = ({ route }: { route?: any; log?: number; navigation?: any }) => {
  console.log(route)
  return (
    <SafeAreaView style={stylesMy.container}>
      <Text style={stylesMy.bigBlue}>Your name: {route?.params?.user}</Text>
    </SafeAreaView>
  )
}
export default Settings
const stylesMy = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
})
