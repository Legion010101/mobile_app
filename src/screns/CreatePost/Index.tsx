import React from "react"
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native"

const CreatePost = ({ navigation }: { route?: any; log?: number; navigation?: any }) => {
  const [postText, setPostText] = React.useState("")
  return (
    <SafeAreaView style={stylesMy.container}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: "Test",
            params: { post: postText },
            merge: true
          })
        }}
      />
      <Button
        title="Save and Back"
        onPress={() => {
          navigation.navigate("AppElement", {
            screen: "Settings",
            params: { user: postText }
          })
        }}
      />
    </SafeAreaView>
  )
}
export default CreatePost
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
