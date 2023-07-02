import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
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

export default HomeStyles;
