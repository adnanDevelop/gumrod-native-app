import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Icons
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate("welcome")}
      >
        <Entypo name="chevron-small-left" size={30} color={"black"} />
      </TouchableOpacity>

      {/* Login Title */}
      <View>
        <Text style={styles.loginTitle}>
          Welcome back! Glad to see you, Again!
        </Text>

        {/* email input */}
        <View style={{ marginBottom: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#8391A1"
          />
        </View>

        {/* password input */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8391A1"
          />
        </View>
        <TouchableOpacity
          style={styles.forgetText}
          onPress={() => navigation.navigate("password")}
        >
          <Text style={{ textAlign: "right" }}>Forget Password?</Text>
        </TouchableOpacity>

        {/* Submit button */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("welcome")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>

        {/* Other methods */}
        <View style={styles.line}>
          <Text style={styles.lines}></Text>
          <Text style={{ color: "#6A707C" }}>Or Login with</Text>
          <Text style={styles.lines}></Text>
        </View>

        {/* Social links */}
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.linkBtn}>
            <AntDesign name="google" size={30} color={"#F14336"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBtn}>
            <FontAwesome name="facebook" size={30} color="#4092FF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkBtn}>
            <AntDesign name="apple1" size={30} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTextContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.loginLink}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 22,
    position: "relative",
  },
  backBtn: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#E8ECF4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 28,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 56,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E8ECF4",
    paddingHorizontal: 10,
    color: "gray",
  },
  forgetText: {
    marginTop: 15,
    marginBottom: 30,
  },

  loginBtn: {
    width: "100%",
    height: 56,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#1E232C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  line: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 10,
  },
  lines: {
    width: "30%",
    height: 2,
    backgroundColor: "#E8ECF4",
  },
  socialLinks: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    marginTop: 22,
  },
  linkBtn: {
    width: "30%",
    height: 55,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E8ECF4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTextContainer: {
    marginTop: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginLink: {
    color: "#35C2C1",
    fontWeight: "600",
    marginLeft: 5,
  },
});
