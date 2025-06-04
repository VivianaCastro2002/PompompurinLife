import { View, StyleSheet,Text, Button } from 'react-native';

type VolverBotonProps = {
  onPress: () => void;
};

export default function VolverBoton({ onPress }: VolverBotonProps) {
  return (
    <View style={styles.container}>
      <Button
        title="Volver"
        color="#69372c"
        onPress={onPress}
      />
</View>
  );
}
const styles = StyleSheet.create({
        container: {   
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        
    },
});