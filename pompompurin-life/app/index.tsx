import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BarraDeEstado from '../components/BarrasDeEstado';
import Lampara from '../components/Lampara';

export default function HomeScreen() {
  const [lampOff, setLampOff] = useState(false);
  return (
    <View style={styles.container}>
        <BarraDeEstado isLampOff={lampOff}/>
        <Lampara onToggle={setLampOff}/>
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

