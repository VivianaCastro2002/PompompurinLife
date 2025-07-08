import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import VolverBoton from '@/components/VolverBoton';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

export default function Armario() {
  const router = useRouter();
  const [trajeSeleccionado, setTrajeSeleccionado] = useState(null);

  const seleccionarTraje = async (nombre, key) => {
    setTrajeSeleccionado({ nombre, key });
    try {
      await AsyncStorage.setItem('trajeSeleccionado', key);
    } catch (e) {
      console.log('Error guardando traje', e);
    }
  };

  const botonTexto = trajeSeleccionado ? `Vestir ${trajeSeleccionado.nombre}` : 'Volver';
  const onBotonPresionado = () => {
    router.push('/');
  };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Armario</Text>
            <View style={styles.closet}>
                <View style={styles.estante}>
                  <TouchableOpacity onPress={() => seleccionarTraje('Gorro de Link', 'gorro-link')} style={styles.touchable}>
                    <Image
                        source={require('../assets/images/trajes/gorro-link.png')}
                        style={styles.gorro}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => seleccionarTraje('Traje de Link', 'traje-link')} style={styles.touchable}>
                    <Image
                        source={require('../assets/images/trajes/traje-link.png')}
                        style={styles.traje}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.estante}>
                  <TouchableOpacity onPress={() => seleccionarTraje('Gorro de Cartman', 'gorro-cartman')} style={styles.touchable}>
                    <Image
                        source={require('../assets/images/trajes/gorro-cartman.png')}
                        style={styles.gorro}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => seleccionarTraje('Traje de Cartman', 'traje-cartman')} style={styles.touchable}>
                    <Image
                        source={require('../assets/images/trajes/traje-cartman.png')}
                        style={styles.traje}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.estante}>
                    <Image
                        source={require('../assets/images/hat.png')}
                        style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
            </View>
            <VolverBoton onPress={onBotonPresionado} title={botonTexto}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9de8c',
        padding: 20,
        paddingTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#69372c',
    },
    closet: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        backgroundColor: '#a1673d',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    estante: {
      width: '80%',
      height: 160,
      backgroundColor: '#69372c',
      borderRadius: 10,
      marginBottom: 20,
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
      marginBottom: 2,
    },
    traje: {
      width: 120,
      height: 80,
      resizeMode: 'contain',
    },
});