import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect, useRef } from 'react';


export default function BarraDeEstado({ energy, hunger }: { energy: number, hunger: number }) {
   return (
      <View style={styles.container}>
        <View style={styles.barContainer}>
          <Text style={styles.title}>Energía: {Math.round(energy)}%</Text>
        </View>
        <View style={styles.barContainer}>
          <Text style={styles.title}>Hambre: {Math.round(hunger)}%</Text>
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
