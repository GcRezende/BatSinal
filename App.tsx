import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import {BatPedido} from './src/batPedido';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <BatPedido/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
