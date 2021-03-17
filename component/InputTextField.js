import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputTextField = ({
  styleInput = {},
  text = "text",
  placeholder = "",
  isSecure = false,
}) => {
  return (
    <View style={styleInput}>
      <Text style={styles.styleInputText}>{text}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        style={styles.styleInput}
      ></TextInput>
      <View
        style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8" }}
      ></View>
    </View>
  );
};

export default InputTextField;

const styles = StyleSheet.create({
  styleInputText: {
    color: "#ABB48D",
    fontSize: 14,
  },
  styleInput: {
    color: "#1D2029",
    fontSize: 14,
    fontFamily: "Avenir Next",
  },
});
