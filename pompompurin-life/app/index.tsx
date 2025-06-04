import { View, StyleSheet } from 'react-native';
import BarraDeEstado from '../components/BarrasDeEstado';
import Lampara from '../components/Lampara';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Lampara />
     <BarraDeEstado/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFF7CC',
  },
});

