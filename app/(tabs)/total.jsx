import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Total() {
  const value = useSelector(state => state.counter.value);
  const totalClicks = useSelector(state => state.counter.totalClicks);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Value:</Text>
      <Text style={styles.number}>{value}</Text>
      <Text style={styles.label}>Total Clicks:</Text>
      <Text style={styles.number}>{totalClicks}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  label: { fontSize: 18, marginTop: 20 },
  number: { fontSize: 48, marginTop: 10 },
});