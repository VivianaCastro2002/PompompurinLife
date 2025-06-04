import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function RefrigeradorBoton(){

  return (
    <View style={styles.container}>
    <Button title={'Refrigerador'}
            color={'#999'}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: '20%',
  },
});
