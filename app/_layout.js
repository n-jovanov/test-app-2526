import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Ovo je prva stranica; prva navedena stranica je prva koja se otvara */}
      <Stack.Screen name="login" />

      {/* Posle login-a, korisnik ide u tab navigaciju */}
      <Stack.Screen name="(tabs)" />

      {/* Help ekran koji može biti prikazan preko stack navigacije */}
      <Stack.Screen
        name="help"
        options={{
          title: "Help",
          headerShown: true, // override globalnog false
          headerStyle: { backgroundColor: "#1D3D47" },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
