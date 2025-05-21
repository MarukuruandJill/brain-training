import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "ホーム",
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: 'bold' },
        }}/>
      <Stack.Screen
        name="janken"
        options={{
          title: "じゃんけん",
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: 'bold' },
        }}/>
    </Stack>
  )
}
