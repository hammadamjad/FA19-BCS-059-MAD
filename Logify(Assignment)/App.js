import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable
} from "react-native";


const Comp1 = () => {
  return (
    <View style={{
      flex: 1.2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F79700",
      borderBottomLeftRadius: 120
    }}>

      <Image source={require('./assets/log.png')} style={{
        width: 70, height: 70,
      }} />

      <Text style={{
        position: "absolute",
        right: 25,
        bottom: 55,
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
      }}>LOGIN</Text>
    </View>
  )
}

const Comp2 = () => {
  return (
    <View style={{
      flex: 0.8,
      justifyContent: "center",
      alignItems: "center"
    }}>

      <TextInput style={{
        width: 200,
        height: 30,
        marginBottom: 20,
        paddingLeft: 20,
        borderColor: "grey",
        borderRadius: 12,
        borderWidth: 1
      }}
        placeholder="Email"
        placeholderTextColor="grey"
      ></TextInput>

      <TextInput style={{
        width: 200,
        height: 30,
        marginBottom: 20,
        paddingLeft: 20,
        borderColor: "grey",
        borderRadius: 12,
        borderWidth: 1
      }}
        placeholder="Password"
        placeholderTextColor="grey"
      ></TextInput>

      <Text style={{
        position: "absolute",
        right: 85,
        fontSize: 10,
        bottom: 50,
        color: "grey"
      }}>Forgot Password ?</Text>

    </View>
  )
}



const Comp3 = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Pressable style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#F79700',
        position: "absolute",
        top: 40,
        width: 230
      }}>
        <Text style={{ color: "white" }}>Login</Text>

      </Pressable>

      <Text style={{
        fontSize: 10,
        position: "absolute",
        bottom: 50
      }}>
        Don't have and account ?
        <Text style={{
          fontSize: 10,
          color: "#F79700",
        }}> Register</Text>
      </Text>

    </View>
  )
}

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Comp1 />
        <Comp2 />
        <Comp3 />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});