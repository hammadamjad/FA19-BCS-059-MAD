import { View, ActivityIndicator, StyleSheet } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { getWeekly } from "../Async";
import * as SplashScreen from "expo-splash-screen";

const Splash = ({ setData, setAppIsReady }) => {
  // to show the splash screen
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // setting and fetching the data
        getWeekly(setData);
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  // to hide the splash screen
  const onLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      await new Promise((resolve) => setTimeout(resolve, 4000));
      await Promise.all([]);
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }} onLayout={onLoaded}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#F57F17" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9C4",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
