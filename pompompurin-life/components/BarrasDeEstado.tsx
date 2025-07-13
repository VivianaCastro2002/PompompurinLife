import { View, StyleSheet } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import CustomText from './CustomText';


export default function BarraDeEstado({ energy, hunger }: { energy: number, hunger: number }) {
   return (
      <View style={styles.container}>
        <View style={styles.energyBarContainer}>
          <CustomText style={styles.title}>Energía: {energy}%</CustomText>
          <View style={styles.barBackground}>
          <View style={[styles.barFill, { width: `${energy}%`, backgroundColor: '#93D067' }]} />
          </View>
        </View>
        <View style={styles.hungryBarContainer}>
          <CustomText style={styles.title}>Hambre: {Math.round(hunger)}%</CustomText>
           <View style={styles.barBackground}>
            <View style={[styles.barFill, { width: `${hunger}%`, backgroundColor: '#C3793C' }]} />
           </View>
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
    fontSize: 16,
    marginBottom: 'auto',
    color:'#5a3a23',
    transform: [{ scaleY: 1.4 }]
  },
  energyBarContainer: {
    alignItems: 'center', // Centra el contenido
  },
  hungryBarContainer: {
    alignItems: 'center', // Centra el contenido
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  barBackground: {
      width: '100%',
      height: 20,
      backgroundColor: '#ddd',
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#5a3a23',
    },
    barFill: {
      height: '100%',
      borderRightWidth: 3,
      borderColor: '#5a3a23',
    },
});
