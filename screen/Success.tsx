import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Success = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          source={require("../assets/success-img.png")}
          style={{ width: 80, height: 80, objectFit: "cover" }}
        />
        <Text style={styles.loginTitle}>Password Changes</Text>
        <Text
          style={{
            color: "#8391A1",
            fontSize: 16,
            marginTop: 5,
            textAlign: "center",
          }}
        >
          Your password has been changed successfully.
        </Text>
        {/* Back button */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 22,
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: "700",
    marginTop: 10,
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
    marginTop: 25,
  },
});
