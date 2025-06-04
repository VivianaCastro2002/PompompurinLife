import { View, Text, StyleSheet, Button } from 'react-native';

type ArmarioBotonProps = {
  onPress: () => void;
};

export default function ArmarioBoton({ onPress }: ArmarioBotonProps) {
    return (
        <View style={styles.container}>
            <Button
                title="Abrir Armario"
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
        flex: 1,
        paddingBottom: 40,
        paddingLeft: 20,

    },
});