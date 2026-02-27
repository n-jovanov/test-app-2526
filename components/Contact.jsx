import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useDispatch } from "react-redux";
import { removeContact } from "../store/contactsSlice";

const Contact = ({ id, firstName, lastName, address, phone }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleEdit = () => {
    router.push({
      pathname: "/update",
      params: {
        id,
        firstName,
        lastName,
        address,
        phone,
      },
    });
  };

  const handleDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <View style={styles.userContainer}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.expandedRow}>
          <View>
            <Text>Address: {address}</Text>
            <Text>Phone: {phone}</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.editBtn} onPress={handleEdit}>
              <Text style={{ color: "white" }}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
              <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity>
          </View>
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
  expandedRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: { flexDirection: "row", gap: 10 },
  editBtn: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 5,
  },
  deleteBtn: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
});

export default Contact;
