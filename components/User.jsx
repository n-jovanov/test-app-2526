import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const User = ({ firstName, lastName, address, phone }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.userContainer}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.additionalInfo}>
          <Text>Address: {address}</Text>
          <Text>Phone: {phone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  additionalInfo: {
    marginTop: 10,
  },
});

export default User;
