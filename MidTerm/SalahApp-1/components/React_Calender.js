import CalendarPicker from 'react-native-calendar-picker';
import { StyleSheet, View, Button } from 'react-native';

export default function React_Calendar() {
    return (

        <View style={styles.container}>
            <View>
                <CalendarPicker
                    width={300}
                    maxDate={new Date()}
                />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});