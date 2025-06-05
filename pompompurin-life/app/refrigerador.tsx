import { View, Text, StyleSheet, Button, Image } from 'react-native';
import VolverBoton from '@/components/VolverBoton';
import { useRouter } from 'expo-router';

export default function Refrigerador() {
  const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Refrigerador</Text>
            <View style={styles.refri}>
                <View style={styles.estante}>
                  <Image
                    source={require('../assets/images/flan.png')}
                    style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                  />
                </View>
                <View style={styles.estante}>
                  <Image
                    source={require('../assets/images/flan.png')}
                    style={{ width: '50%', height: '100%', resizeMode: 'contain' }}
                  />
                </View>
                <View style={styles.estante}>
                  <Image
                    source={require('../assets/images/flan.png')}
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
        backgroundColor: '#FFF7CC',
        padding: 20,
        paddingTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3670A1',
    },
    refri: {
       flex: 1,
       width: '100%',
       marginVertical: 20,
       backgroundColor: '#A9CBD1',
       borderRadius: 10,
       justifyContent: 'center',
       alignItems: 'center',
    },
    estante: {
        width: '80%',
        height: '25%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});