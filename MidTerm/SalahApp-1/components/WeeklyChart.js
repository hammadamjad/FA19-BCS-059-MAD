import { View, Button } from "react-native";
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
} from "victory-native";

data = {
  actual: [
    { x: "Fajr", y: 5 },
    { x: "Zuhr", y: 3 },
    { x: "Asr", y: 4 },
    { x: "Maghrib", y: 3 },
    { x: "Esha", y: 1 },
  ],
};

export default function WeeklyChart({ navigation }) {
  return (
    <View>
      <View>
        <VictoryChart domainPadding={10}>
          <VictoryBar
            colorScale={"#1BD5D4"}
            data={[
              { x: "Fajr", y: 5 },
              { x: "Zuhr", y: 3 },
              { x: "Asr", y: 4 },
              { x: "Maghrib", y: 3 },
              { x: "Esha", y: 1 },
            ]}
          />
        </VictoryChart>
      </View>
    </View>
  );
}
