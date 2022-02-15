import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components";
import { logout } from "../constants/firebase";

const App = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Button title="Logout" onPress={() => logout()} />
      <Button
        title="Clients"
        onPress={() => props.navigation.navigate("clients")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7bd5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
