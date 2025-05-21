import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
}
export default function Button({ label, onPress }: Props) {
    const onPress_func = onPress ?? (() => alert("button pressed"));
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress_func}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'blue',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 20,
    },
});