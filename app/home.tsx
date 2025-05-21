import Button from "@/components/Button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

// export const options = {
//     title: 'Home',
//     headerStyle: { backgroundColor: '#f4511e' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' },
// };

export default function Home() {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.text}>脳トレ</Text>
            <Button label="漢字"/>
            <Button label="じゃんけん" onPress={() => router.push('/janken')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
    },
});

export const options = {
    title: 'Home',
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
};
