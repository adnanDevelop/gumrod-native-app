import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Screens
import Welcome from "./screen/Welcome";
import Signup from "./screen/Signup";
import Login from "./screen/Login";

function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="screen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({});
