import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../theme/AppTheme";

interface IRoundedButtonProps {
  text: string;
  onPress: () => void;
}

const RoundedButton = ({ text, onPress }: IRoundedButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.roundedButton}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  roundedButton: {
    width: "100%",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingVertical: 13,
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
