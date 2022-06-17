import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import axios from "axios";
import * as Location from "expo-location";

export default function LocationAPI({ navigation }) {
  const [latitude, setLat] = useState(33.6844);
  const [longitude, setLong] = useState(73.0479);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLat(location["coords"].latitude);
    setLong(location["coords"].longitude);
  };

  const tConv24 = (time24) => {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };

  const getTime = () => {
    const date = new Date();
    const timezone = date.getTimezoneOffset();

    const options = {
      method: "GET",
      url:
        "https://javad-salah-v1.p.rapidapi.com/" +
        latitude +
        "/" +
        longitude +
        "/" +
        timezone / -60 +
        "/",
      params: { method: "Hanafi", date: "{month} {day} {year}" },
      headers: {
        "X-RapidAPI-Key": "f35330d4f6msh50880f6ab3602f0p19cfd2jsn310232319738",
        "X-RapidAPI-Host": "javad-salah-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("\n\n\n\n\n");
        const obj = {};
        obj.fajr = tConv24(response.data.times.fajr);
        obj.dhuhr = tConv24(response.data.times.dhuhr);
        obj.asr = tConv24(response.data.times.asr);
        obj.maghrib = tConv24(response.data.times.maghrib);
        obj.isha = tConv24(response.data.times.isha);
        console.log(obj);
        navigation.navigate("Timings", { params: { obj: obj } });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
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
      <View style={styles.container}>
        <Button title="Get Location" onPress={() => getLocation()} />
        <Button title="Get Time" onPress={() => getTime()} />
      </View>
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
    height: Dimensions.get("window").height - 200,
  },
});
