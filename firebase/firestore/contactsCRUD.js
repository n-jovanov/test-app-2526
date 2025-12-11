import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth } from "../config";

const db = getFirestore();

// CREATE
export const createContact = async (contactData) => {
  const uid = auth.currentUser.uid;

  try {
    const ref = collection(db, "users", uid, "contacts");
    await addDoc(ref, contactData);
  } catch (error) {
    console.log("Error creating contact:", error.message);
  }
};

// READ ALL (REAL-TIME)
export const getAllContacts = (callback) => {
  const uid = auth.currentUser.uid;

  const ref = collection(db, "users", uid, "contacts");

  // Firestore listener (returns unsubscribe)
  const unsubscribe = onSnapshot(ref, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(data);
  });

  return unsubscribe;
};

// UPDATE
export const updateContact = async (id, newData) => {
  const uid = auth.currentUser.uid;

  try {
    const ref = doc(db, "users", uid, "contacts", id);
    await updateDoc(ref, newData);
  } catch (error) {
    console.log("Error updating contact:", error.message);
  }
};

// DELETE
export const deleteContact = async (id) => {
  const uid = auth.currentUser.uid;

  try {
    const ref = doc(db, "users", uid, "contacts", id);
    await deleteDoc(ref);
  } catch (error) {
    console.log("Error deleting contact:", error.message);
  }
};