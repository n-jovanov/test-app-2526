import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { updateContact } from "../firebase/firestore/contactsCRUD";

export default function Update() {
  const router = useRouter();
  const { id, firstName, lastName, address, phone } = useLocalSearchParams();

  const [newFirst, setNewFirst] = useState(firstName);
  const [newLast, setNewLast] = useState(lastName);
  const [newAddress, setNewAddress] = useState(address);
  const [newPhone, setNewPhone] = useState(phone);

  const handleUpdate = async () => {
    await updateContact(id, {
      firstName: newFirst,
      lastName: newLast,
      address: newAddress,
      phone: newPhone,
    });

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Contact</Text>

      <TextInput style={styles.input} value={newFirst} onChangeText={setNewFirst} />
      <TextInput style={styles.input} value={newLast} onChangeText={setNewLast} />
      <TextInput style={styles.input} value={newAddress} onChangeText={setNewAddress} />
      <TextInput style={styles.input} value={newPhone} onChangeText={setNewPhone} />

      <Button title="Sačuvaj" onPress={handleUpdate} />
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
