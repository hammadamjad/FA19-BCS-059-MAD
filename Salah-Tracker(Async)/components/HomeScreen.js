import { View, ScrollView, ImageBackground, StyleSheet } from "react-native";

import React, { useState } from "react";
import React_Calendar from "./React_Calender";
import Jamats from "./Jamats";

export default function HomeScreen() {
  const [date, setDate] = useState("");
  return (
    <ScrollView>
      <React_Calendar setDate={setDate} />
      <Jamats date={date} />
    </ScrollView>
  );
}
