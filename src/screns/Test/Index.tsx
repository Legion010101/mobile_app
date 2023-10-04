import React, { useState } from "react"
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native"

const Test = ({ route, log, navigation }: { route?: any; log?: number; navigation?: any }) => {
  const [counter, setCounter] = useState(0)
  const { itemId } = route.params
  console.log(log, itemId)
  const onClick = () => {
    setCounter((prev) => ++prev)
  }
  return (
    <SafeAreaView style={stylesMy.container}>
      <Button title={"GO DEEP"} onPress={() => navigation?.push("Test")} />
      <Button title="Go back" onPress={() => navigation?.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={stylesMy.bigBlue}>
          Text container: the text will be inline if the space allowed itText container: the text will be inline if the
          space allowed itText container: the text will be inline if the space allowed it
        </Text>
        <Text onPress={onClick}>{`вы кликнулиsы ${counter} раз из ${itemId}`}</Text>
        <Button title="Create post" onPress={() => navigation.navigate("CreatePost")} />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        <Button title={"click me"} onPress={onClick} />
        <Button title={"change params"} onPress={() => navigation.setParams({ itemId: 42 })} />
        <Button title={"change options"} onPress={() => navigation.setOptions({ title: "new title" })} />
      </View>
    </SafeAreaView>
  )
}
export default Test
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
