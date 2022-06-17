import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavCharts from "./TabNavCharts";
import HomeScreen from "./HomeScreen";
import LocationAPI from "./LocationAPI";
import Timings from "./Timings";
const Drawer = createDrawerNavigator();

export default function DrawerNavMain() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Charts" component={TabNavCharts} />
      <Drawer.Screen name="Prayer Timings" component={LocationAPI} />
      <Drawer.Screen
        name="Timings"
        component={Timings}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}
