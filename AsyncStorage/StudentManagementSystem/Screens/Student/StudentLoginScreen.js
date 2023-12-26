import React,{useState} from "react";
import { Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudentLoginScreen = ({navigation}) => {
    const [regNo, setRegNo] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async()=>{
        if(regNo == "" || password == ""){
            alert("please enter username and password");
        }else{
            let students = await AsyncStorage.getItem("student")
            students = JSON.parse(students);
            students.map((student)=>{
                if(student.regNo == regNo && student.password == password){
                    alert("logged in successfully")
                    navigation.navigate("Course Registration Screen")
                }
            })
            alert("login success");
        }
    }
  
    return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "coral" }}>
        Student Login
      </Text>
      <TextInput
        placeholder="registration number"
        style={{
          borderWidth: 1,
          width: 200,
          height: 40,
          margin: 10,
          padding: 10,
          color: "gray",
        }}
        onChangeText={setRegNo}
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

export default StudentLoginScreen;
