import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Animated,
} from "react-native";
import React, { useRef, useEffect } from "react";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("MainScreen");
  }, 2000);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Night.jpg")}
        style={styles.image}
      >
        <FadeInView>
          <ImageBackground
            source={require("../assets/SpashIMG.png")}
            style={styles.innerImg}
          >
            <Text style={styles.title}>SALAH TRACKER</Text>
          </ImageBackground>
        </FadeInView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFB81C",
    fontSize: 25,
    fontWeight: "bold",
    transform: [{ rotate: "30deg" }],
  },
  innerImg: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "-30deg" }],
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
});

export default Splash;
