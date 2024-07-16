import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Icons
import { Entypo } from "@expo/vector-icons";

const Password = ({ navigation }: any) => {
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
        <Text style={styles.loginTitle}>Create new password</Text>
        <Text
          style={{
            marginBottom: 50,
            color: "#8391A1",
            fontSize: 16,
            marginTop: 5,
          }}
        >
          Your new password must be unique from those previously used.
        </Text>

        <View style={{ marginBottom: 15 }}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#8391A1"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#8391A1"
          />
        </View>

        {/* Submit button */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("success")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

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
  },
  input: {
    width: "100%",
    height: 56,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#1E232C",
    paddingHorizontal: 10,
    color: "gray",
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
    marginTop: 35,
  },
  bottomTextContainer: {
    marginTop: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
