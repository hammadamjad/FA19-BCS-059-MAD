import { StyleSheet, Text, View, Image } from 'react-native';

import Intro from './Components/Intro';

export default function App() {
  return (
    <View style={styles.container}>
      <Intro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
