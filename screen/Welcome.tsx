import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// icons
// import { EvilIcons } from "@expo/vector-icons";

function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img.png")} style={styles.loginImg} />

      {/* Form Section */}
      <View style={styles.loginContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.signInLogo}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginOutlineBtn}
          onPress={() => {
            navigation.navigate("signup");
            console.log("working");
          }}
        >
          <Text style={{ color: "#1E232C", fontSize: 16, fontWeight: "700" }}>
            Register
          </Text>
        </TouchableOpacity>
        <Text style={styles.loginLink}>Continue as a guest</Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  loginImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0%",
    left: "0%",
    zIndex: -1,
  },
  signInLogo: {
    objectFit: "cover",
    marginBottom: 43,
  },
  loginContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: "50%",
    marginLeft: "-50%",
    paddingHorizontal: 22,
    overflow: "hidden",
    zIndex: 1,
  },
  loginBtn: {
    width: "100%",
    height: 56,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#1E232C",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  loginOutlineBtn: {
    width: "100%",
    height: 56,
    borderWidth: 2,
    borderColor: "#1E232C",
    borderRadius: 10,
    color: "white",
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginLink: {
    color: "#35C2C1",
    fontWeight: "600",
    marginTop: 44,
  },
});
