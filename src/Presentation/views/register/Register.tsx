import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
const RegisterScreen = () => {
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    phone,
    register,
    onChange,
  } = useViewModel();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Choose an image</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>REGISTER</Text>

        <CustomTextInput
          image={require("../../../../assets/user.png")}
          placeholder="First Name"
          property="firstName"
          value={firstName}
          onChangeText={(text) => onChange("firstName", text)}
        />
        <CustomTextInput
          image={require("../../../../assets/my_user.png")}
          placeholder="Last Name"
          property="lastName"
          value={lastName}
          onChangeText={(text) => onChange("lastName", text)}
        />
        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Email"
          keyboardType="email-address"
          property="email"
          value={email}
          onChangeText={(text) => onChange("email", text)}
        />
        <CustomTextInput
          image={require("../../../../assets/phone.png")}
          placeholder="Phone"
          keyboardType="numeric"
          property="phone"
          value={phone}
          onChangeText={(text) => onChange("phone", text)}
        />
        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Password"
          secureTextEntry
          property="password"
          value={password}
          onChangeText={(text) => onChange("password", text)}
        />
        <CustomTextInput
          image={require("../../../../assets/confirm_password.png")}
          placeholder="Confirm Password"
          secureTextEntry
          property="confirmPassword"
          value={confirmPassword}
          onChangeText={(text) => onChange("confirmPassword", text)}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="SIGN IN" onPress={register} />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
    height: "70%",
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
    top: "5%",
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
