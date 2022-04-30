import { View, Text, ScrollView, Button } from 'react-native'

import React, { useState } from "react";
import React_Calendar from './React_Calender'
import Jamats from './Jamats'
import Streak from './Streak'

export default function HomeScreen({ navigation }) {
    let [counter, setCounter] = useState(0)

    function updateCounter() {
        setCounter(++counter)
    }

    return (
        <ScrollView>

            <React_Calendar />
            <Jamats setcounter={setCounter} updatecounter={updateCounter} />
            <Streak count={counter} />
            <View>
                <Button
                    title="Display Charts"
                    onPress={() => navigation.navigate('Charts')}
                />
            </View>

        </ScrollView>
    )
}