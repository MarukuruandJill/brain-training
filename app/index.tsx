import * as React from 'react';
import Home from './home';

export const options = {
  title: 'Home',
  headerStyle: { backgroundColor: '#f4511e' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' },
};

export default function Layout() {
    return <Home />
}

// import Button from "@/components/Button";
// import { router } from "expo-router";
// import { StyleSheet, Text, View } from "react-native";

// export const options = {
//     title: 'Home',
//     headerStyle: { backgroundColor: '#f4511e' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' },
// };

// export default function Home() {
//     return (
//         <View
//             style={styles.container}
//         >
//             <Text style={styles.text}>能トレ</Text>
//             <Button label="漢字"/>
//             <Button label="じゃんけん" onPress={() => router.push('/janken')}/>
//         </View>
//     );
// }

// Home.options = {
//   title: 'Home',
//   headerStyle: { backgroundColor: '#f4511e' },
//   headerTintColor: '#fff',
//   headerTitleStyle: { fontWeight: 'bold' },
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     text: {
//         fontSize: 30,
//     },
// });


