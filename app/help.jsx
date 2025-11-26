import { StyleSheet, Text, View } from "react-native";

export default function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <Text style={styles.text}>
        Ovo je ekran koji objašnjava kako funkcioniše dodavanje korisnika. Ovaj ekran je otvoren preko stack navigacije.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});
