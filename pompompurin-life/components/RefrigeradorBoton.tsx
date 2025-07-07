import { useState } from 'react';
import { View, Button,TouchableOpacity,Image, StyleSheet } from 'react-native';

type RefrigeradorBotonProps = {
  onPress: () => void;
};

export default function RefrigeradorBoton({ onPress }: RefrigeradorBotonProps){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assets/images/fridge.png')}
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
