import { StyleSheet, View, Image, Pressable, Switch } from "react-native";
import React from "react";

export default function Prayer({ IMGname, enabled, toggleSwitch }) {
  return (
    <View style={[styles.prayerCon, styles.shadowProp]}>
      <View style={styles.prayerName}>
        <Image source={IMGname} style={styles.prayerImg} />
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={enabled}
      />
      {/* <Pressable
        style={[styles.selectButton, enabled ? styles.custom : styles.white]}
      >
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={enabled}
        />
        <Image
          source={require("../assets/akela_banda.png")}
          style={{
            width: 50,
            height: 50,
            tintColor: enabled ? "white" : "black",
          }}
        />
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  prayerCon: {
    flex: 1,
    margin: 13,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ff9800",
  },
  prayerImg: {
    width: 40,
    height: 40,
    tintColor: "white",
  },

  shadowProp: {
    elevation: 20,
    shadowColor: "black",
  },
  selectButton: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
    flexDirection: "row",
    padding: 2,
    borderRadius: 8,
  },
  prayerName: {
    flex: 1,
  },
  custom: {
    backgroundColor: "#f5dd4b",
    elevation: 20,
    shadowColor: "black",
  },
  white: {
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "black",
  },
});
