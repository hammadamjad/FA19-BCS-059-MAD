import { View, ScrollView, ImageBackground, StyleSheet } from "react-native";

import React, { useState } from "react";
import React_Calendar from "./React_Calender";
import Jamats from "./Jamats";

export default function HomeScreen() {
  const [date, setDate] = useState("");
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <React_Calendar setDate={setDate} />
      </View>
      <Jamats date={date} />
    </ScrollView>
  );
}
