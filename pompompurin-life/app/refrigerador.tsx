import { View, Text, StyleSheet, Button } from 'react-native';
import VolverBoton from '@/components/VolverBoton';
import { useRouter } from 'expo-router';

export default function Refrigerador() {
  const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Refrigerador</Text>
            <View style={styles.refri}></View>
            <VolverBoton onPress={() => router.push('/')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF7CC',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#69372c',
    },
    refri: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        backgroundColor: '#69372c',
        borderColor: '#FFF7CC',
        borderWidth: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});