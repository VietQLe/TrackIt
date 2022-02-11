import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Button } from "../components";
import { logInWithEmailAndPassword } from "../constants/firebase";

const App = (props: any) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = () => {
    if (email && password) {
      logInWithEmailAndPassword(email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login Page!</Text>
      <Input
        placeholder="Email"
        onChangeText={(text: string) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        onChangeText={(text: string) => setPassword(text)}
      />
      <Button title="Log In" onPress={() => login()} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}>Don't Have an Account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => props.navigation.navigate("signup")}
        >
          <Text style={{ color: "rgba(81,135,200,1)" }}>Register Here!</Text>
        </TouchableOpacity>
      </View>
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
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default App;
