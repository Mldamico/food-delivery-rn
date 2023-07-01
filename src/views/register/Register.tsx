import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/chef.jpg")}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/user_image.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Choose an image</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>REGISTER</Text>
        <View style={styles.formTextInputContainer}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="First Name"
            style={styles.formTextInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.formTextInputContainer}>
          <Image
            source={require("../../../assets/my_user.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.formTextInput}
            keyboardType="default"
          />
        </View>
        <View style={styles.formTextInputContainer}>
          <Image
            source={require("../../../assets/email.png")}
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
            source={require("../../../assets/phone.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Phone"
            style={styles.formTextInput}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formTextInputContainer}>
          <Image
            source={require("../../../assets/password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Password"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View style={styles.formTextInputContainer}>
          <Image
            source={require("../../../assets/confirm_password.png")}
            style={styles.formIcon}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.formTextInput}
            keyboardType="default"
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="SIGN IN" onPress={() => {}} />
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
