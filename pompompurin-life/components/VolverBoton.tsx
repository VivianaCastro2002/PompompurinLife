import { TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';

type VolverBotonProps = {
  onPress: () => void;
  title?: string;
};

export default function VolverBoton({ onPress, title = 'Volver' }: VolverBotonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <CustomText style={styles.buttonText}>{title}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#69372c',
    paddingHorizontal: 20,
    height: 40, // altura fija
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    transform: [{ scaleY: 1.4 }],
    lineHeight: 18,
  },
});
