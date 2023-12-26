import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = async () => {
    if (userName == "" || password == "") {
      alert("please enter username and password");
    } else if (
      (userName == "admin" || userName == "Admin" || userName == "ADMIN") &&
      password == "123"
    ) {
      setAdmin({
        userName: userName,
        password: password,
      });
      await AsyncStorage.setItem("user", JSON.stringify(admin));
      alert("login success");
      navigation.navigate("StudentRegistrationScreen");
    } else {
      alert("invalid username or password");
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "coral" }}>
        Admin Login
      </Text>
      <TextInput
        placeholder="username"
        style={{
          borderWidth: 1,
          width: 200,
          height: 40,
          margin: 10,
          padding: 10,
          color: "gray",
        }}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="password"
        style={{
          borderWidth: 1,
          width: 200,
          height: 40,
          margin: 10,
          padding: 10,
          color: "gray",
        }}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
