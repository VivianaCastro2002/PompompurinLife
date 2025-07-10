import { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Lampara({
     apagada,
      onToggle,
    }: {
      apagada: boolean;
      onToggle: (isOff: boolean) => void;
    }) {
      const toggle = () => {
        onToggle(!apagada);
      };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggle}>
        <Image
          source={
            apagada
              ? require('../assets/images/lamp-off.png')
              : require('../assets/images/lamp-on.png')
          }
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     alignItems: 'center',
     justifyContent: 'center',
   },
   image: {
     width: 100,  // Ajusta según el tamaño que necesites
     height: 100,
     resizeMode: 'contain',
   },
});
