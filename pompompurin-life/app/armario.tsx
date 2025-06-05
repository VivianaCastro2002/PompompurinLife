import { View, Text, StyleSheet, Button, Image } from 'react-native';
import VolverBoton from '@/components/VolverBoton';
import { useRouter } from 'expo-router';

export default function Armario() {
  const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Armario</Text>
            <View style={styles.closet}>
                <View style={styles.estante}>
                    <Image
                        source={require('../assets/images/hat.png')}
                        style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={styles.estante}>
                    <Image
                        source={require('../assets/images/hat.png')}
                        style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={styles.estante}>
                    <Image
                        source={require('../assets/images/hat.png')}
                        style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
            </View>
            <VolverBoton onPress={() => router.push('/')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9de8c',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#69372c',
    },
    closet: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        backgroundColor: '#a1673d',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    estante: {
        width: '80%',
        height: '25%',
        backgroundColor: '#69372c',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});