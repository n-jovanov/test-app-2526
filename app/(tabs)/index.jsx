import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Contact from "../../components/Contact";
import { auth } from "../../firebase/config";
import { getAllContacts } from "../../firebase/firestore/contactsCRUD";

export default function Home() {
  const router = useRouter();
  const currentUser = auth.currentUser;
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = getAllContacts((data) => {
      setContacts(data);
    });

    // cleanup kada se ekran ugasi
    return () => unsubscribe();
  }, []);

  const filteredContacts = contacts.filter(
    (c) => c.firstName.toLowerCase().includes(search.toLowerCase()) || c.lastName.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {currentUser && <Text style={{ fontSize: 18, marginBottom: 15 }}>Dobrodošao, {currentUser.email}!</Text>}

      <Button title="Logout" onPress={handleLogout} />

      <TextInput style={styles.input} placeholder="Search" value={search} onChangeText={setSearch} />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact id={item.id} firstName={item.firstName} lastName={item.lastName} address={item.address} phone={item.phone} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 10,
  },
});
