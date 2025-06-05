import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

type RefrigeradorBotonProps = {
  onPress: () => void;
};

export default function RefrigeradorBoton({ onPress }: RefrigeradorBotonProps){
  return (
    <View style={styles.container}>
    <Button title={'Refrigerador'}
            color={'#999'}
            onPress={onPress}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

  },
});
