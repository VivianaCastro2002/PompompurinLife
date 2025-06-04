import { View, StyleSheet } from 'react-native';
import BarraDeEstado from '../components/BarrasDeEstado';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
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

