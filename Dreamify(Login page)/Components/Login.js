import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Comp1 = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={{
                fontSize: 30,
                fontWeight: "bold",
                paddingBottom: 10
            }}>Welcome Back</Text>

            <Text style={{
                textAlign: "center",
                width: 300
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.</Text>
        </View>
    )
}

const Comp2 = () => {
    return (
        <View style={styles.fieldContainer}>
            <TextInput
                style={styles.input}
                placeholder='Username , Email & Phone Number'
                placeholderTextColor={"#626363"}
            ></TextInput>

            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor={"#626363"}
            ></TextInput>

            <Text style={{
                textAlign: "right"
            }}>Forgot Password ?</Text>

            <Pressable style={styles.button}>
                <Text style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold"
                }}>Sign in</Text>
            </Pressable>

        </View>
    )
}

const HorizontalLine = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <LinearGradient
                colors={["white", "#FF8CFB"]}
                style={{ flex: 1, height: 3, backgroundColor: 'black' }}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 0.0 }}
            />
            <View>
                <Text style={{ width: 120, textAlign: 'center', fontSize: 12 }}>Or Sign up With</Text>
            </View>
            <LinearGradient
                colors={["white", "#FF8CFB"]}
                style={{ flex: 1, height: 3, backgroundColor: 'black' }}
                start={{ x: 1.0, y: 0.0 }}
                end={{ x: 0.0, y: 0.0 }}
            />
        </View>
    )
}

const Comp3 = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.icon}>
                <Image source={require('../assets/Google_logo.png')} />
            </View>
            <View style={styles.icon}>
                <Image source={require('../assets/Facbook.png')} />
            </View>
            <View style={styles.icon}>
                <Image source={require('../assets/Group.png')} />
            </View>
        </View>
    )
}

export default function Login() {
    return (
        <View style={styles.container}>
            <Comp1 />
            <Comp2 />
            <HorizontalLine />
            <Comp3 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fieldContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    input: {
        backgroundColor: "#d7dbd8",
        marginBottom: 10,
        height: 60,
        width: 320,
        padding: 20,
        borderRadius: 20
    },
    button: {
        marginTop: 20,
        height: 60,
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "#FF8CFB",
    },
    icon: {
        backgroundColor: "#d7dbd8",
        padding: 15,
        borderRadius: 50,
        borderColor: "#FF8CFB",
        borderWidth: 1,
        margin: 10,
        height: 60
    }

});