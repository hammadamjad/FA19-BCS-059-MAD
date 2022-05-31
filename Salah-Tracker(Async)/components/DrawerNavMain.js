import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavCharts from "./TabNavCharts";
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavMain() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Charts" component={TabNavCharts} />
    </Drawer.Navigator>
  );
}
