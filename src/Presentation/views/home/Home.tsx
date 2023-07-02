import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./styles";
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
