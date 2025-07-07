import { useState } from 'react';
import { View, Button, StyleSheet,TouchableOpacity, Image } from 'react-native';

export default function Lampara({ onToggle }: { onToggle: (isOff: boolean) => void }) {
  const [isOff, setIsOff] = useState(false);

  const toggle = () => {
    setIsOff(prev => {
      const next = !prev;
      onToggle(next);
      return next;
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggle}>
        <Image
          source={
            isOff
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
