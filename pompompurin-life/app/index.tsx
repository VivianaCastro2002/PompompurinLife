import { View, StyleSheet } from 'react-native';
import BarraDeEstado from '../components/BarrasDeEstado';
import Lampara from '../components/Lampara';
import ArmarioBoton from '@/components/ArmarioBoton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BarraDeEstado/>
      <View style={styles.accionesContainer}>
        <ArmarioBoton />  
        <Lampara />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFF7CC',
  },
  accionesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});

