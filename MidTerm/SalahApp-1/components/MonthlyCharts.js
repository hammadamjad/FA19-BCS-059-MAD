import { View, Button } from "react-native";
import React from "react";
import { VictoryBar, VictoryChart, VictoryStack } from "victory-native";

data = {
  actual1: [
    { x: "Aug", y: 1 },
    { x: "Sep", y: 2 },
    { x: "Oct", y: 1 },
    { x: "Nov", y: 1 },
    { x: "Dec", y: 1 },
  ],
  actual2: [
    { x: "Aug", y: 1 },
    { x: "Sep", y: 4 },
    { x: "Oct", y: 1 },
    { x: "Nov", y: 1 },
    { x: "Dec", y: 1 },
  ],
  actual3: [
    { x: "Aug", y: 1 },
    { x: "Sep", y: 5 },
    { x: "Oct", y: 1 },
    { x: "Nov", y: 1 },
    { x: "Dec", y: 1 },
  ],
  actual4: [
    { x: "Aug", y: 1 },
    { x: "Sep", y: 3 },
    { x: "Oct", y: 1 },
    { x: "Nov", y: 1 },
    { x: "Dec", y: 1 },
  ],
  actual5: [
    { x: "Aug", y: 6 },
    { x: "Sep", y: 1 },
    { x: "Oct", y: 1 },
    { x: "Nov", y: 1 },
    { x: "Dec", y: 1 },
  ],
};

const getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

export default function MonthlyCharts() {
  return (
    <View>
      <VictoryChart domainPadding={10}>
        <VictoryStack
          colorScale={["#1BD5D4", "#AF4BCF", "#E97369", "#1DE4BD", "#E7E34E"]}
        >
          <VictoryBar data={data.actual1} />
          <VictoryBar data={data.actual2} />
          <VictoryBar data={data.actual3} />
          <VictoryBar data={data.actual4} />
          <VictoryBar data={data.actual5} />
        </VictoryStack>
      </VictoryChart>
    </View>
  );
}
