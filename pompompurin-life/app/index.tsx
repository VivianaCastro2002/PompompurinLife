import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BarraDeEstado from '../components/BarrasDeEstado';
import Lampara from '../components/Lampara';

export default function HomeScreen() {
  const [energy, setEnergy] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [isLampOff, setIsLampOff] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prev => {
        if (isLampOff) return Math.min(prev + 1, 100);
        else return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLampOff]);

  return (
    <View style={styles.container}>
        <BarraDeEstado energy={energy} hunger={hunger}/>
        <Lampara onToggle={setIsLampOff}/>
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

