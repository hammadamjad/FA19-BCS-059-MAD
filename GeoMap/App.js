import React, { useState, useEffect } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [latitude, setLat] = useState(33.6844);
  const [longitude, setLong] = useState(73.0479);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.latitude);
      setLong(location.longitude);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 33.6844,
          longitude: 73.0479,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          draggable
          coordinate={{ latitude: latitude, longitude: longitude }}
          title="My Pin Title"
          description="My Pin Description"
          onDrag={(e) => {
            setLat(e.nativeEvent.coordinate.latitude);
            setLong(e.nativeEvent.coordinate.longitude);
          }}
        >
          <Callout>
            <Text>This is Callout</Text>
          </Callout>
        </Marker>
        <Circle
          center={{ latitude: latitude, longitude: longitude }}
          radius={100}
        ></Circle>
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
