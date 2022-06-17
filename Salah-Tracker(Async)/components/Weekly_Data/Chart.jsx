import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { VictoryBar, VictoryChart, VictoryLabel } from "victory-native";

export default function Chart({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <VictoryChart
          domainPadding={20}
          minDomain={{ y: 0 }}
          style={{
            background: { fill: "#90A4AE" },
          }}
          scale={{ y: "linear" }}
          domain={{ y: [0, 7] }}
        >
          <VictoryBar
            renderInPortal={false}
            style={{
              data: { fill: "#37474F" },
            }}
            data={data}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryLabel dy={20} style={{ fill: "white" }} />}
          />
        </VictoryChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  box: {
    width: Dimensions.get("window").width - 30,
    flex: 0.45,
    backgroundColor: "#CFD8DC",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
  },
});
