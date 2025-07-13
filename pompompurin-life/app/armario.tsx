import { View, StyleSheet, TouchableOpacity, Button, Image, ImageBackground } from 'react-native';
import VolverBoton from '@/components/VolverBoton';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import CustomText from '@/components/CustomText';

export default function Armario() {
  const router = useRouter();
  const [trajeSeleccionado, setTrajeSeleccionado] = useState(null);
  const [gorroSeleccionado, setGorroSeleccionado] = useState(null);

  const seleccionarTraje = async (nombre, key, tipo) => {
    try {
      if (tipo === 'traje') {
        setTrajeSeleccionado({ nombre, key });
        await AsyncStorage.setItem('trajeSeleccionado', key);
      } else if (tipo === 'gorro') {
        setGorroSeleccionado({ nombre, key });
        await AsyncStorage.setItem('gorroSeleccionado', key);
      }
    } catch (e) {
      console.log('Error guardando traje o gorro', e);
    }
  };

  const botonTexto =
    trajeSeleccionado && gorroSeleccionado
      ? `Vestir ${trajeSeleccionado.nombre} y ${gorroSeleccionado.nombre}`
      : trajeSeleccionado
        ? `Vestir ${trajeSeleccionado.nombre}`
        : gorroSeleccionado
          ? `Vestir ${gorroSeleccionado.nombre}`
          : 'Volver'
  ;

  const onBotonPresionado = () => {
    router.push('/');
  };
    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>Armario</CustomText>
                <ImageBackground
                  source={require('../assets/images/armario-abierto.png')}
                  style={styles.closet}
                  imageStyle={{ resizeMode: 'contain' }}
                >
                <View style={styles.estante}>
                  <TouchableOpacity
                    onPress={() => seleccionarTraje('Gorro de Link', 'gorro-link', 'gorro')}
                    style={styles.touchable}>
                    <Image
                      source={require('../assets/images/trajes/gorro-link.png')}
                      style={styles.gorro}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => seleccionarTraje('Traje de Link', 'traje-link', 'traje')}
                    style={styles.touchable}>
                    <Image
                      source={require('../assets/images/trajes/traje-link.png')}
                      style={styles.traje}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.estante}>
                  <TouchableOpacity
                    onPress={() => seleccionarTraje('Gorro de Cartman', 'gorro-cartman', 'gorro')}
                    style={styles.touchable}>
                    <Image
                      source={require('../assets/images/trajes/gorro-cartman.png')}
                      style={styles.gorro}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => seleccionarTraje('Traje de Cartman', 'traje-cartman', 'traje')}
                    style={styles.touchable}>
                    <Image
                      source={require('../assets/images/trajes/traje-cartman.png')}
                      style={styles.traje}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.estante}>
                  {/* Visual */}
                  <View style={{ position: 'absolute', zIndex: 1 }}>
                    <Image
                      source={require('../assets/images/versiones-pompompurin/miku-traje.png')}
                      style={styles.imagen}
                    />
                    <Image
                      source={require('../assets/images/versiones-pompompurin/miku-pelo.png')}
                      style={[styles.imagen, { position: 'absolute', top: 0, left: 0 }]}
                    />
                  </View>
                  {/* Área de toque: traje */}
                  <TouchableOpacity
                    onPress={() => seleccionarTraje('Traje de Miku', 'traje-miku', 'traje')}
                    style={[styles.toqueInvisible, { bottom: 0 }]}
                  />
                  {/* Área de toque: pelo */}
                  <TouchableOpacity
                    onPress={() => seleccionarTraje('Pelo de Miku', 'gorro-miku', 'gorro')}
                    style={[styles.toqueInvisible, { top: 0 }]}
                  />
                </View>
            </ImageBackground>
            <View style={styles.botonesContainer}>
              <VolverBoton
                onPress={async () => {
                  try {
                    await AsyncStorage.removeItem('trajeSeleccionado');
                    await AsyncStorage.removeItem('gorroSeleccionado');
                    setTrajeSeleccionado(null);
                    setGorroSeleccionado(null);
                    router.push('/');
                  } catch (e) {
                    console.log('Error al desvestir', e);
                  }
                }}
                title="Desvestir"
              />
              <VolverBoton onPress={onBotonPresionado} title={botonTexto} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eecc6b',
        padding: 20,
        paddingTop: '18%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        transform: [{ scaleY: 1.4 }],
        color: '#69372c',
    },
    closet: {
        flex: 1,
        width: '100%',
        height: 'auto',
        paddingTop: 60,
        alignItems: 'center',
    },
    estante: {
      width: '75%',
      height: 120,
      marginBottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchable: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    gorro: {
      width: 105,
      height: 75,
      resizeMode: 'contain',
      marginBottom: -10,
    },
    traje: {
      width: 120,
      height: 80,
      resizeMode: 'contain',
    },
    imagen: {
      width: 165,
      height: 150,
      resizeMode: 'contain',
    },
    toqueInvisible: {
      position: 'absolute',
      height: '50%', // o una porción personalizada
      width: '100%',
      backgroundColor: 'transparent',
      zIndex: 2,
    },
    botonesContainer: {
      gap: 18, // Si estás en React Native 0.71+, si no, usa marginBottom en cada botón
      width: '100%',
      height: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    }

});