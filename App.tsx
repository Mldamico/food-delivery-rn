import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import RoundedButton from "./src/components/RoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/chef.jpg")} style={styles.background} />
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>F-Delivery</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>LOGIN</Text>
        <View style={styles.formTextInputContainer}>
          <Image
            source={require("./assets/email.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Email"
            style={styles.formTextInput}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formTextInputContainer}>
          <Image
            source={require("./assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Password"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="LOGIN" onPress={() => {}} />
        </View>
        <View style={styles.formRegister}>
          <Text>Don't have an account?</Text>
          <Text style={styles.formRegisterButton}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  formContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: "40%",
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    padding: 30,
  },
  formTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
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
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  formRegisterButton: {
    fontWeight: "bold",
    color: "orange",
    marginLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginStart: 10,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "20%",
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft: 4,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});
