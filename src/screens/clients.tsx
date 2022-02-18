import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, Modal } from "react-native";
import { Input, Button } from "../components";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { app, auth, db } from "../constants/firebase";

const App = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [address1, setAddress1] = useState<string | null>(null);
  const [address2, setAddress2] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [clientsData, setClientsData] = useState<any>([]);

  const fetchClientsList = async () => {
    const q = query(
      collection(db, "clients"),
      where("userid", "==", auth.currentUser?.uid),
      orderBy("name")
    );
    const doc = await getDocs(q);
    const clientList: any = [];
    doc.forEach((doc: any) => {
      const data = doc.data();
      clientList.push({ id: doc.id, ...data });
    });
    setClientsData(clientList);
  };

  const addClient = async () => {
    if (name && address1 && city && state && zipCode && phoneNumber) {
      try {
        await addDoc(collection(db, "clients"), {
          userid: auth.currentUser?.uid,
          name,
          address1,
          address2,
          city,
          state,
          zipCode,
          phoneNumber,
        });
        fetchClientsList();
      } catch {
        Alert.alert("Error with adding Client");
      }
    }

    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    fetchClientsList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clients Page!</Text>
      <View>
        {clientsData ? (
          clientsData.map((item: any) => (
            <Text key={item.id} style={styles.list}>
              {item.name}
            </Text>
          ))
        ) : (
          <Text>No Clients available</Text>
        )}
      </View>
      <Button
        style={styles.floatingButton}
        title="+"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Client</Text>
            <Input
              placeholder="ClientName"
              onChangeText={(text: string) => setName(text)}
            />
            <Input
              placeholder="Address1"
              onChangeText={(text: string) => setAddress1(text)}
            />
            <Input
              placeholder="Address 2"
              onChangeText={(text: string) => setAddress2(text)}
            />
            <Input
              placeholder="City"
              onChangeText={(text: string) => setCity(text)}
            />
            <Input
              placeholder="State"
              onChangeText={(text: string) => setState(text)}
            />
            <Input
              placeholder="Zip Code"
              onChangeText={(text: string) => setZipCode(text)}
            />
            <Input
              placeholder="Phone Number"
              onChangeText={(text: string) => setPhoneNumber(text)}
            />
            <Button title="Save" onPress={() => addClient()} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7bd5f5",
    alignItems: "center",
    padding: 48,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
  list: {
    fontSize: 16,
    lineHeight: 24,
  },
  floatingButton: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
    right: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
