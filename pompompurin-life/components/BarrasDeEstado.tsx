import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';


export default function BarraDeEstado() {
  const [energy, setEnergy] = useState(40); // en porcentaje
  const [hunger, setHunger] = useState(100);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Text style={styles.title}>Energía: {energy}%</Text>
      </View>
      <View style={styles.barContainer}>
        <Text style={styles.title}>Hambre: {hunger}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    backgroundColor: '#b66325',
    justifyContent:'center',
    alignItems: 'center',
    gap: '3%',
    padding: '3%',
  },
  title: {
    fontSize: 16,
    marginBottom: 'auto',
    fontWeight: 'bold',
    color:'white',
  },
  barContainer: {
    alignItems: 'center', // Centra el contenido
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  }
});
