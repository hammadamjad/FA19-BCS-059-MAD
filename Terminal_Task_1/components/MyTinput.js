import { View, Text, TextInput } from "react-native";
import React from "react";

const MyTinput = ({ setMyName }) => {
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          width: 200,
          height: 50,
          margin: 20,
        }}
        onChange={(event) => {
          setMyName(event.nativeEvent.text);
        }}
      ></TextInput>
    </View>
  );
};

export default MyTinput;
