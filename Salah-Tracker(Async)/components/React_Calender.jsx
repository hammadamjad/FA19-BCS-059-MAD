import CalendarPicker from "react-native-calendar-picker";
import { View, Dimensions } from "react-native";
export default function React_Calendar({ setDate }) {
  return (
    <View
      style={{
        backgroundColor: "#263238",
        width: Dimensions.get("window").width - 40,
        borderRadius: 10,
        margin: 10,
        elevation: 10,
        shadowColor: "yellow",
      }}
    >
      <CalendarPicker
        width={Dimensions.get("window").width - 40}
        maxDate={new Date()}
        onDateChange={(date) => setDate(date.toDate().toDateString())}
        headerWrapperStyle={{
          backgroundColor: "#78909C",
          height: 80,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        dayLabelsWrapper={{
          backgroundColor: "#263238",
          width: Dimensions.get("window").width - 40,
          borderRadius: 10,
          borderTopColor: "#78909C",
          borderBottomColor: "#263238",
          marginTop: -16,
        }}
        disabledDatesTextStyle={{
          color: "red",
        }}
        textStyle={{
          color: "white",
          fontSize: 13,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        todayBackgroundColor="#78909C"
        selectedDayTextStyle={{
          color: "white",
        }}
        selectedDayStyle={{
          backgroundColor: "#78909C",
        }}
      />
    </View>
  );
}
