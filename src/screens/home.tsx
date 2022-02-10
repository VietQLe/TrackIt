import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components';
import { logout } from '../constants/firebase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Button title="Logout" onPress={() => logout()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7bd5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
