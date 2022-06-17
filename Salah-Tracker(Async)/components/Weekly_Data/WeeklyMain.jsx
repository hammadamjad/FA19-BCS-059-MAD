import { View } from "react-native";
import React, { useState } from "react";
import Splash from "./Splash";
import Chart from "./Chart";

export default function WeeklyMain() {
  const [data, setData] = useState(null);
  const [isAppReady, setAppIsReady] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && <Chart data={data} />}
      {!isAppReady && (
        <Splash setData={setData} setAppIsReady={setAppIsReady} />
      )}
    </View>
  );
}
