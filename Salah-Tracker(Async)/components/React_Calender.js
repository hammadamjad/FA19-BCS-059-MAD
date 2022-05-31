import CalendarPicker from "react-native-calendar-picker";
import { StyleSheet, View } from "react-native";
import { Calendar, Arrow, CalendarList, Agenda } from "react-native-calendars";

export default function React_Calendar({ setDate }) {
  return (
    <View style={styles.container}>
      <CalendarPicker
        width={300}
        maxDate={new Date()}
        onDateChange={(date) => setDate(date.toDate().toDateString())}
        nextTitle="<"
      />
      {/* <Calendar
        enableSwipeMonths={true}
        style={{ borderRadius: 10, borderWidth: 2 }}
        headerStyle={{
          backgroundColor: "blue",
          shadowColor: "black",
          borderRadius: 10,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
