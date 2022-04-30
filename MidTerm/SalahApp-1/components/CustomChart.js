import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";
import {
  VictoryPie,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
} from "victory-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function CustomChart() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleStartDate = (date) => {
    setStartDate(date.toDateString() + "");
    hideDatePicker();
  };

  const handleEndDate = (date) => {
    setEndDate(date.toDateString() + "");
    hideDatePicker();
  };

  return (
    <View>
      <View style={styles.dateContainer}>
        <Button
          style={styles.dateButton}
          title="Start date"
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleStartDate}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
        />
        <TextInput
          style={{
            width: 200,
            margin: 10,
            padding: 10,
          }}
        >
          {startDate}
        </TextInput>
      </View>
      <View style={styles.dateContainer}>
        <Button
          style={styles.dateButton}
          title="End Date"
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleEndDate}
          onCancel={hideDatePicker}
          maximumDate={new Date()}
        />
        <TextInput
          style={{
            width: 200,
            margin: 10,
            padding: 10,
          }}
        >
          {endDate}
        </TextInput>
      </View>
      <View>
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={[
            { x: "Fajr", y: 35 },
            { x: "Zuhr", y: 40 },
            { x: "Asr", y: 55 },
            { x: "Maghrib", y: 55 },
            { x: "Esha", y: 55 },
          ]}
          height={300}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  dateButton: {
    width: 100,
  },
});
