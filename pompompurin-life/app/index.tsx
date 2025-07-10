import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import BarraDeEstado from '../components/BarrasDeEstado';
import Lampara from '../components/Lampara';
import RefrigeradorBoton from '../components/RefrigeradorBoton';
import ArmarioBoton from '../components/ArmarioBoton';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen() {
  const router = useRouter();
  const [energy, setEnergy] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [isLampOff, setIsLampOff] = useState(false);
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const [mostrarDialogoHambreMedia, setMostrarDialogoHambreMedia] = useState(false);
  const [mostrarDialogoHambreCritica, setMostrarDialogoHambreCritica] = useState(false);
  const [mostrarDialogoSuennio, setMostrarDialogoSuennio] = useState(false);
  const notificadoHambre = useRef(false);
  const notificadoEnergia = useRef(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [gorroSeleccionado, setGorroSeleccionado] = useState(null);
  const [trajeSeleccionado, setTrajeSeleccionado] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [mostrarDialogoComio, setMostrarDialogoComio] = useState(false);


  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const storedEnergy = await AsyncStorage.getItem('energy');
        const storedHunger = await AsyncStorage.getItem('hunger');
        const storedLamp = await AsyncStorage.getItem('isLampOff');
        const storedGorro = await AsyncStorage.getItem('gorroSeleccionado');
        const storedTraje = await AsyncStorage.getItem('trajeSeleccionado');
        const storedComio = await AsyncStorage.getItem('mostrarDialogoComio');
        if (storedComio === 'true') {
          setMostrarDialogoComio(true);
          setTimeout(() => setMostrarDialogoComio(false), 4000);
          await AsyncStorage.removeItem('mostrarDialogoComio'); // limpia la bandera
        }
        if (storedLamp !== null) setIsLampOff(storedLamp === 'true');
        if (storedEnergy !== null) setEnergy(Number(storedEnergy));
        if (storedHunger !== null) setHunger(Number(storedHunger));
        if (storedGorro !== null) setGorroSeleccionado(storedGorro);
        if (storedTraje !== null) setTrajeSeleccionado(storedTraje);
      } catch (e) {
        console.log('Error al cargar datos', e);
      } finally {
        setIsReady(true);
      }
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      setEnergy(prev => {
        if (isLampOff) return Math.min(prev + 1, 100);
        else return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLampOff, isReady]);

  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      setHunger(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;
    AsyncStorage.setItem('isLampOff', isLampOff.toString()).catch(e =>
      console.log('Error al guardar estado de la lámpara', e)
    );
  }, [isLampOff, isReady]);

  useEffect(() => {
    if (!isReady) return;
    AsyncStorage.setItem('energy', energy.toString()).catch(e =>
      console.log('Error al guardar energía', e)
    );
  }, [energy, isReady]);

  useEffect(() => {
    if (!isReady) return;
    AsyncStorage.setItem('hunger', hunger.toString()).catch(e =>
      console.log('Error al guardar hambre', e)
    );
  }, [hunger, isReady]);

  useEffect(() => {
    Notifications.requestPermissionsAsync().then(status => {
      if (status.granted) {
        console.log("Permiso de notificación concedido");
      }
    });
  }, []);

  useEffect(() => {
    if (!isReady) return;

    if (hunger === 50) {
      setMostrarDialogoHambreMedia(true);
      setTimeout(() => setMostrarDialogoHambreMedia(false), 4000);
    }
    if (hunger === 15) {
      setMostrarDialogoHambreCritica(true);
      setTimeout(() => setMostrarDialogoHambreCritica(false), 4000);
    }
  }, [hunger, isReady]);

  useEffect(() => {
    if (!isReady) return;

    if (energy === 15) {
      setMostrarDialogoSuennio(true);
      setTimeout(() => setMostrarDialogoSuennio(false), 4000);
    }
  }, [energy, isReady]);

  useEffect(() => {
    if (!isReady) return;

    if (hunger <= 15 && !notificadoHambre.current) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: '¡Me mueroo! ૮(˶ㅠ︿ㅠ)ა',
          body: 'Tu Pompompurin necesita comer un flan 🍮',
          sound: 'default',
        },
        trigger: null,
      });
      notificadoHambre.current = true;
    }
    if (hunger > 15) {
      notificadoHambre.current = false;
    }
  }, [hunger, isReady]);

  useEffect(() => {
    if (!isReady) return;

    if (energy <= 15 && !notificadoEnergia.current) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: '¡TENGO SUEÑOO! ୧(๑•̀ᗝ•́)૭',
          body: 'Tu Pompompurin necesita descansar 💤',
          sound: 'default',
        },
        trigger: null,
      });
      notificadoEnergia.current = true;
    }
    if (energy > 15) {
      notificadoEnergia.current = false;
    }
  }, [energy, isReady]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (!isLampOff) blinkTwice();
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, [isLampOff]);

  const blinkTwice = async () => {
    for (let i = 0; i < 2; i++) {
      setIsBlinking(true);
      await new Promise(resolve => setTimeout(resolve, 150));
      setIsBlinking(false);
      await new Promise(resolve => setTimeout(resolve, 150));
    }
  };

  const handlePress = () => {
    setMostrarDialogo(true);
    setTimeout(() => setMostrarDialogo(false), 4000);
  };

  const guardarEstadoActual = async () => {
    try {
      await AsyncStorage.setItem('energy', energy.toString());
      await AsyncStorage.setItem('hunger', hunger.toString());
      await AsyncStorage.setItem('isLampOff', isLampOff.toString());
      if (gorroSeleccionado) {
        await AsyncStorage.setItem('gorroSeleccionado', gorroSeleccionado);
      }
      if (trajeSeleccionado) {
        await AsyncStorage.setItem('trajeSeleccionado', trajeSeleccionado);
      }
    } catch (e) {
      console.log('Error al guardar el estado actual antes de navegar', e);
    }
  };

  return (
    <ImageBackground source={require('../assets/images/fondo4.png')} style={styles.container} resizeMode="cover" >
     <View style={styles.container}>
         {isLampOff && (
             <View style={styles.overlayOscuro} pointerEvents="none" />
         )}

      <View style={styles.barrasEstadoContainer}>
        <BarraDeEstado energy={energy} hunger={hunger}/>
      </View>

      <View style={styles.imagenContainer}>
        {mostrarDialogoComio && (
          <Image
            source={require('../assets/images/ñam-ñam.png')} // usa la ruta correcta
            style={styles.dialogo}
          />
        )}
        {mostrarDialogo && (
          <Image
            source={require('../assets/images/touchText.png')}
            style={styles.dialogo}
          />
        )}
        {mostrarDialogoHambreMedia && (
          <Image
            source={require('../assets/images/se me antoja algo.png')}
            style={styles.dialogo}
          />
        )}
        {mostrarDialogoHambreCritica && (
          <Image
            source={require('../assets/images/tengo hambre.png')}
            style={styles.dialogo}
          />
        )}
        {mostrarDialogoSuennio && (
            <Image
             source={require('../assets/images/que alguien apague la luz.png')}
             style={styles.dialogo}
             />
        )}

        <Pressable onPress={handlePress}>
          <Image
            source={require('../assets/images/Pompompurin2.png')}
            style={styles.imagen}
          />
          {gorroSeleccionado === 'gorro-link' && (
            <Image
              source={require('../assets/images/versiones-pompompurin/link-gorro con cola.png')}
              style={[styles.imagen,styles.traje]}
            />
          )}
          {gorroSeleccionado === 'gorro-cartman' && (
            <Image
              source={require('../assets/images/versiones-pompompurin/cartman-gorro.png')}
              style={[styles.imagen,styles.traje]}
            />
          )}
          {gorroSeleccionado === 'gorro-miku' && (
            <Image
              source={require('../assets/images/versiones-pompompurin/miku-pelo.png')}
              style={[styles.imagen,styles.traje]}
            />
          )}

          {trajeSeleccionado === 'traje-link' && (
            <Image
              source={require('../assets/images/versiones-pompompurin/link-traje.png')}
              style={[styles.imagen, styles.traje]}
            />
          )}
          {trajeSeleccionado === 'traje-cartman' && (
            <Image
              source={require('../assets/images/versiones-pompompurin/cartman-traje.png')}
              style={[styles.imagen, styles.traje]}
            />
          )}
          {trajeSeleccionado === 'traje-miku' && (
            <Image
              source={require('../assets/images/versiones-pompompurin/miku-traje.png')}
              style={[styles.imagen, styles.traje]}
            />
          )}
           {/* Ojos cerrados solo si está parpadeando y la lámpara está encendida */}
           {isBlinking && !isLampOff && (
             <Image
               source={require('../assets/images/versiones-pompompurin/Pompompurin-ojos cerrados.png')}
               style={[styles.imagen, styles.traje]}
             />
           )}
           {/* Imagen dormido si la lámpara está apagada */}
           {isLampOff && (
             <Image
               source={require('../assets/images/versiones-pompompurin/Pompompurin-dormido.png')}
               style={[styles.imagen, styles.traje]}
             />
           )}
        </Pressable>
      </View>
      <View style={styles.accionesContainer}>
        <ArmarioBoton onPress={async () => {
          await guardarEstadoActual();
          router.push('/armario');
        }} />
        <Lampara onToggle={setIsLampOff}/>
        <RefrigeradorBoton onPress={async () => {
          await guardarEstadoActual();
          router.push('/refrigerador');
        }} />
      </View>
     </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    gap: 0,
  },
  barrasEstadoContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingTop: '10%',
    zIndex: 2
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
    zIndex: 2
  },
  imagen: {
    width: 350,
    height: 305,
    resizeMode: 'contain',
  },
  traje: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  accionesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  overlayOscuro: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5, // puedes ajustarlo entre 0.3 y 0.7 según lo que te guste
    zIndex: 1,
  },
});

