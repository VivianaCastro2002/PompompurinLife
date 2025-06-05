import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import BarraDeEstado from '../components/BarrasDeEstado';
import Lampara from '../components/Lampara';
import RefrigeradorBoton from '../components/RefrigeradorBoton';
import ArmarioBoton from '../components/ArmarioBoton';

export default function HomeScreen() {
  const router = useRouter();
  const [energy, setEnergy] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [isLampOff, setIsLampOff] = useState(false);
  const [mostrarDialogo, setMostrarDialogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prev => {
        if (isLampOff) return Math.min(prev + 1, 100);
        else return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLampOff]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePress = () => {
    setMostrarDialogo(true);
    setTimeout(() => 
      setMostrarDialogo(false), 4000);   
  };

  return (
    <View style={styles.container}>
      <View style={styles.barrasEstadoContainer}>
        <BarraDeEstado energy={energy} hunger={hunger}/>
      </View>

      <View style={styles.imagenContainer}>
        { mostrarDialogo && (
        <Image
          source={require('../assets/images/touchText.png')}
          style={styles.dialogo}
          /> 
        )}
        <Pressable onPress={handlePress}>
          <Image
            source={require('../assets/images/pompompurin.png')}
            style={styles.imagen}
          />
        </Pressable>
      
      </View> 
      <View style={styles.accionesContainer}>
        <ArmarioBoton onPress={() => router.push('/armario')} />
        <Lampara onToggle={setIsLampOff}/>
        <RefrigeradorBoton onPress={() => router.push('/refrigerador')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFF7CC',
    gap: 0,
  },
  barrasEstadoContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  imagenContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: '5%',
    
  },
  dialogo: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain',
    position: 'absolute',
    top: '10%',
  },
  imagen: {
    width: 360,
    height: 295,
    resizeMode: 'contain',  
     
  },
  accionesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

