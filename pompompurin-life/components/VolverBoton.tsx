import { View, StyleSheet,Text, Button } from 'react-native';

type VolverBotonProps = {
  onPress: () => void;
  title?: string;
};

export default function VolverBoton({ onPress , title = "Volver"  }: VolverBotonProps) {
  return (
    <View style={styles.container}>
      <Button
        title={title}
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