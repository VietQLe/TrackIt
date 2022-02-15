import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("screen");

interface Props {
  title: string;
  style?: any; // Fix style proptype - was trying React.CSSProperties
  onPress: () => void;
}

const App = (props: Props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f2f98",
    borderColor: "#1f2f98",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
  },
});

export default App;
