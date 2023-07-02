import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>F-Delivery</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>LOGIN</Text>

        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Email"
          keyboardType="email-address"
          property="email"
          value={email}
          onChangeText={(text) => onChange("email", text)}
        />
        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Password"
          secureTextEntry
          property="password"
          value={password}
          onChangeText={(text) => onChange("password", text)}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="LOGIN" onPress={() => {}} />
        </View>
        <View style={styles.formRegister}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

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
    alignItems: "center",
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
