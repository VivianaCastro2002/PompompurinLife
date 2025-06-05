import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

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
    <Button title={isOff ? 'Encender' : 'Apagar'}
            onPress={toggle}
            color={isOff ? '#999' : '#FFD700'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
