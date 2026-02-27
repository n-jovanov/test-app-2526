import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, decrement, increment } from "../../store/counterSlice";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");

  const handleAddAmount = () => {
    const number = parseInt(amount);

    if (!isNaN(number)) {
      dispatch(addAmount(number));
      setAmount("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{value}</Text>

      <View style={styles.buttons}>
        <Button title="-" onPress={() => dispatch(decrement())} />
        <Button title="+" onPress={() => dispatch(increment())} />
      </View>

      <TextInput style={styles.input} placeholder="Unesi broj" keyboardType="numeric" value={amount} onChangeText={setAmount} />

      <Button title="Add amount" onPress={handleAddAmount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  number: { fontSize: 64, marginBottom: 20 },
  buttons: { flexDirection: "row", width: 150, justifyContent: "space-between", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 150,
    padding: 8,
    marginBottom: 10,
    textAlign: "center",
  },
});
