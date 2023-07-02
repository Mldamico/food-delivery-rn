import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./styles";

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
