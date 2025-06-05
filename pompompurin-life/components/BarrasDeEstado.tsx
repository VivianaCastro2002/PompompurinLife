import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect, useRef } from 'react';


export default function BarraDeEstado({ energy, hunger }: { energy: number, hunger: number }) {
   return (
      <View style={styles.container}>
        <View style={styles.energyBarContainer}>
          <Text style={styles.title}>Energía: {Math.round(energy)}%</Text>
        </View>
        <View style={styles.hungryBarContainer}>
          <Text style={styles.title}>Hambre: {Math.round(hunger)}%</Text>
        </View>
      </View>
   );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
    padding: '3%',
  },
  title: {
    fontSize: 24,
    marginBottom: 'auto',
    fontWeight: 'bold',
    color:'white',
  },
  energyBarContainer: {
    alignItems: 'center', // Centra el contenido
    backgroundColor:'#b7e0b1'
  },
  hungryBarContainer: {
    alignItems: 'center', // Centra el contenido
    backgroundColor:'#eeaa78'
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  }
});
