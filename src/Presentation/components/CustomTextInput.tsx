import { StyleSheet, TextInput, Image, View, KeyboardType } from "react-native";
import React from "react";

interface ITextInputProps {
  image: any;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

const CustomTextInput = ({
  image,
  placeholder,
  value,
  onChangeText,
  property,
  keyboardType = "default",
  secureTextEntry = false,
}: ITextInputProps) => {
  return (
    <View style={styles.formTextInputContainer}>
      <Image source={image} style={styles.formIcon} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        style={styles.formTextInput}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  formTextInput: {
    borderBottomColor: "#AAA",
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 15,
  },
  formTextInputContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
});
