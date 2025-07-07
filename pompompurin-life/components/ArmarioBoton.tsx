import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

type ArmarioBotonProps = {
  onPress: () => void;
};

export default function ArmarioBoton({ onPress }: ArmarioBotonProps) {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../assets/images/armario.png')}
              style={styles.imagenBoton}
            />
          </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imagenBoton: {
    width: 100, // ajusta según el tamaño de tu PNG
    height: 100,
    resizeMode: 'contain',
  },
});