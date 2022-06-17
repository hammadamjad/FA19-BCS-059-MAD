import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, onload } from "react-native";
import MyTinput from "./components/MyTinput";

export default function App() {
  // app load

  const [myName, setMyName] = useState();
  useEffect(() => {
    setMyName("Kamran");
  }, []);

  const [reload, setReload] = useState(false);
  const toggle = () => setReload((previousState) => !previousState);

  useEffect(() => {
    console.log("App reloaded");
  }, [reload]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>Name: </Text>
        <Text>{myName}</Text>
      </View>
      <MyTinput setMyName={setMyName} />
      <Button
        title="toggle reload"
        onPress={() => {
          toggle();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
