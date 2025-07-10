import { View, Text, StyleSheet,TouchableOpacity, Button, Image} from 'react-native';
import VolverBoton from '@/components/VolverBoton';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

export default function Refrigerador() {
  const router = useRouter();
  const [comidaSeleccionada, setComidaSeleccionada] = useState(null); // ejemplo: 'flan'

  const comerFlan = async () => {
    try {
      const storedHunger = await AsyncStorage.getItem('hunger');
      const currentHunger = storedHunger ? parseInt(storedHunger) : 0;
      const newHunger = Math.min(currentHunger + 40, 100);
      await AsyncStorage.setItem('hunger', newHunger.toString());
      await AsyncStorage.setItem('mostrarDialogoComio', 'true');
      router.push('/');
    } catch (e) {
      console.log('Error al guardar datos', e);
    }
  };

  const botonTexto = comidaSeleccionada === 'flan' ? 'Comer flan' : 'Volver';
  const onBotonPresionado = () => {
    if (comidaSeleccionada === 'flan') {
      comerFlan();
    } else {
      router.push('/');
    }
  };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Refrigerador</Text>
            <View style={styles.refri}>
                <View style={styles.estante}>
                 <TouchableOpacity onPress={() => setComidaSeleccionada('flan')}
                  style={styles.touchable}>
                  <Image
                    source={require('../assets/images/flan.png')}
                    style={styles.imagen}
                  />
                 </TouchableOpacity>
                </View>
                <View style={styles.estante}>
                 <TouchableOpacity onPress={() => setComidaSeleccionada('flan')}
                 style={styles.touchable}>
                  <Image
                    source={require('../assets/images/flan.png')}
                    style={styles.imagen}
                  />
                 </TouchableOpacity>
                </View>
                <View style={styles.estante}>
                 <TouchableOpacity onPress={() => setComidaSeleccionada('flan')}
                 style={styles.touchable}>
                  <Image
                    source={require('../assets/images/flan.png')}
                    style={styles.imagen}
                  />
                 </TouchableOpacity>
                </View>
            </View>
            <VolverBoton onPress={onBotonPresionado} title={botonTexto}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF7CC',
        padding: 20,
        paddingTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3670A1',
    },
    refri: {
       flex: 1,
       width: '100%',
       marginVertical: 20,
       backgroundColor: '#A9CBD1',
       borderRadius: 10,
       justifyContent: 'center',
       alignItems: 'center',
    },
    estante: {
        width: '80%',
        height: '25%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width: '60%',
        height: '90%',
        resizeMode: 'contain',
    },
});