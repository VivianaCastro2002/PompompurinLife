import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Lampara() {
  const [isOn, setIsOn] = useState(true);

  const toggleLampara = () => {
    setIsOn(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isOn ? 'Apagar' : 'Encender'}
        onPress={toggleLampara}
        color={isOn ? '#FFD700' : '#999'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 40,
  },
});
