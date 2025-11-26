import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const openHelp = () => {
    router.push("/help");
  };

  const handleSubmit = () => {
    console.log("Uneto:");
    console.log({ firstName, lastName, address, phone });

    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create User</Text>

      <Button title="?" onPress={openHelp} />

      <TextInput style={styles.input} placeholder="Ime" value={firstName} onChangeText={setFirstName} />

      <TextInput style={styles.input} placeholder="Prezime" value={lastName} onChangeText={setLastName} />

      <TextInput style={styles.input} placeholder="Adresa" value={address} onChangeText={setAddress} />

      <TextInput style={styles.input} placeholder="Telefon" value={phone} onChangeText={setPhone} />

      <Button title="Sačuvaj" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
});
