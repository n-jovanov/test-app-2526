import { useRouter } from "expo-router";
import { Button, FlatList, View } from "react-native";
import User from "../../components/User";

export default function Home() {
  const users = [
    { id: "1", firstName: "Marko", lastName: "Marković", address: "Ulica 1", phone: "123-456-789" },
    { id: "2", firstName: "Jovan", lastName: "Jovanović", address: "Ulica 2", phone: "987-654-321" },
    { id: "3", firstName: "Nikola", lastName: "Nikolić", address: "Ulica 3", phone: "555-555-555" },
  ];

  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Logout" onPress={handleLogout} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <User firstName={item.firstName} lastName={item.lastName} address={item.address} phone={item.phone} />}
      />
    </View>
  );
}
