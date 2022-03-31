import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


const Comp1 = () => {
    return (
        <View style={styles.imgContainer}>
            <Image source={require('./../assets/Saly-1intro-image.png')}
                style={styles.img}></Image>
        </View>
    )
}

const Comp2 = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                paddingBottom: 10,
                paddingTop: 10
            }}>Discover Your Own Dream House</Text>
            <Text style={{
                textAlign: "center",
                fontSize: 12
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </Text>
        </View>
    )
}

const Comp3 = () => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonSign}>
                <Text style={[styles.buttonText, { color: "white" }]}>Sign in</Text>
            </Pressable>
            <Pressable style={styles.buttonReg}>
                <Text style={[styles.buttonText, { color: "black" }]}>Register</Text>
            </Pressable>
        </View>
    )
}

export default function Intro() {
    return (
        <View style={styles.container}>
            <Comp1 />
            <Comp2 />
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
        padding: 20,
    },
    imgContainer: {
        flex: 1.2,
        backgroundColor: "#FF8CFB",
        borderRadius: 40,
        width: 300,
    },
    img: {
        width: 300,
        height: 300
    },
    textContainer: {
        width: 250,
        flex: 0.7,
        justifyContent: "flex-start",
        alignItems: "center",

    },
    buttonContainer: {
        flex: 0.4,
        flexDirection: "row",
        width: 300,
        justifyContent: "center"

    },
    buttonSign: {
        backgroundColor: "#FF8CFB",
        height: 45,
        width: 120,
        justifyContent: "center",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    buttonReg: {
        backgroundColor: "#EBEBEB",
        height: 45,
        width: 100,
        justifyContent: "center",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }

});