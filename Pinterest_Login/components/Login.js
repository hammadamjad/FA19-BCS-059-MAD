import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';


export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.imageMain}>
                <Image source={require('D:/MAD/Pinterest_Login/assets/back.png')}
                    style={{
                        width: 400,
                        height: 270,
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,

                    }} />
                <Image source={require('../assets/pinterest_logo.png')}
                    style={{
                        width: 100,
                        height: 100,
                        bottom: 15,
                    }}
                />

            </View>
            <View style={styles.loginCon}>
                <Text style={{
                    fontSize: 30,
                    paddingBottom: 8

                }}>Welcome to Pinterest</Text>
                <View style={{
                    flex: .3
                }}>
                    <TextInput
                        style={{
                            width: 300,
                            height: 50,
                            backgroundColor: "#EFEFEF",
                            borderRadius: 20,
                            padding: 25,
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}

                        placeholder="Email address"
                    ></TextInput>
                </View>

                <View style={{
                    flex: .3
                }}>

                    <Pressable style={{
                        width: 300,
                        height: 50,
                        backgroundColor: "#E60024",
                        borderRadius: 20,
                        padding: 25,
                        fontSize: 17,
                        fontWeight: 'bold',
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            color: "white"
                        }}>Continue</Text>

                    </Pressable>
                </View>

                <View style={{
                    flex: .3
                }}>

                    <Pressable style={{
                        width: 300,
                        height: 50,
                        backgroundColor: "#1878F3",
                        borderRadius: 20,
                        padding: 25,
                        fontSize: 17,
                        fontWeight: 'bold',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        flexDirection: "row"
                    }}>
                        <Image style={{
                            width: 30,
                            height: 30,
                            backgroundColor: "white",
                            borderRadius: 20
                        }}
                            source={require("../assets/facebook.png")} />
                        <Text style={{
                            flex: .8,
                            fontSize: 15,
                            color: "white",
                            fontWeight: "700",
                            fontWeight: 'bold'
                        }}>Continue with Facebook</Text>
                    </Pressable>
                </View>

                <View style={{
                    flex: .1
                }}>

                    <Pressable style={{
                        width: 300,
                        height: 50,
                        backgroundColor: "#EFEFEF",
                        borderRadius: 20,
                        padding: 25,
                        fontSize: 17,
                        fontWeight: 'bold',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        flexDirection: "row"
                    }}>
                        <Image style={{
                            width: 30,
                            height: 30
                        }}
                            source={require("../assets/Google.png")} />
                        <Text style={{
                            flex: .8,
                            fontSize: 15,
                            fontWeight: "700",
                            fontWeight: 'bold'
                        }}>Continue with Google</Text>
                    </Pressable>
                </View>

                <View style={{
                    paddingTop: 40,
                    paddingBottom: 4,
                    flex: .3,
                    width: 300,
                }}>
                    <Text style={
                        {
                            color: "#4E4E4E",
                            textAlign: 'center'
                        }

                    }>
                        By continuing, you agree ro Pinterest's Terms of Service and acknowledge you've
                        read your Privacy Policy
                    </Text>
                </View>
            </View>



        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageMain: {
        flex: 1.5,
        alignItems: 'center',
    },
    loginCon: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: "space-between"
    }

});
