import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, Button } from '../components';
import { registerWithEmailAndPassword } from '../constants/firebase';

const App = (props: any) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const signup = () => {
    if (name && email && password) {
      registerWithEmailAndPassword(name, email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text>SignUp Page!</Text>
      <Input
        placeholder="Name"
        onChangeText={(text: string) => setName(text)}
      />
      <Input
        placeholder="Email"
        onChangeText={(text: string) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        onChangeText={(text: string) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={() => signup()} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}>Already Have an Account?</Text>
        <TouchableOpacity
          style={{ marginHorizontal: 5 }}
          onPress={() => props.navigation.navigate('login')}
        >
          <Text style={{ color: 'rgba(81,135,200,1)' }}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7bd5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});

export default App;
