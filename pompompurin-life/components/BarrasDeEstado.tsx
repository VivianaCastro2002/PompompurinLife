import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect, useRef } from 'react';


export default function BarraDeEstado({isLampOff }: { isLampOff: boolean }) {
  const [energy, setEnergy] = useState(40);
  const [hunger, setHunger] = useState(100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
      if (isLampOff) {
        intervalRef.current = setInterval(() => {
          setEnergy(prev => {
            const next = prev + 0.5; // 0.5% cada 100ms = 5%/s
            return next > 100 ? 100 : next;
          });
        }, 100);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [isLampOff]);

    return (
      <View style={styles.container}>
        <View style={styles.barContainer}>
          <Text style={styles.title}>Energía: {Math.floor(energy)}%</Text>
        </View>
        <View style={styles.barContainer}>
          <Text style={styles.title}>Hambre: {hunger}%</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    backgroundColor: '#b66325',
    justifyContent:'center',
    alignItems: 'center',
    gap: '3%',
    padding: '3%',
  },
  title: {
    fontSize: 16,
    marginBottom: 'auto',
    fontWeight: 'bold',
    color:'white',
  },
  barContainer: {
    alignItems: 'center', // Centra el contenido
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  }
});
