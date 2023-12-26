import React,{useState} from "react";
import {Text,View,Button,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentRegScreen = ({navigation})=>{
    
    const [regNo,setRegNo] = useState("")
    const [studentName,setStudentName] = useState("")
    const [password,setPassword] = useState("")
    const [student,setStudent] = useState([{
        regNo:"",
        studentName:"",
        password:""
    }])

   
    const handleRegistration =async()=>{
        if(regNo=="" || password=="" ||studentName=="")
        {
            alert("please fill in all the fields")
        }
        else{
            
            setStudent((prevStudents) => [
                ...prevStudents,
                {
                  regNo: regNo,
                  studentName: studentName,
                  password: password,
                },
              ]);
            await AsyncStorage.setItem("student",JSON.stringify(student))
            alert("student registered successfully")
            setPassword("")
            setRegNo("")
            setStudentName("")
        }
    }
    const handleremove = async()=>{
        let stud = await AsyncStorage.getItem("student")
        console.warn(stud)
    }

    return(
        <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            
        <View >
            <Text style={{fontSize:20,fontWeight:"bold",color:"coral"}}>Welcome to Student Registration Screen</Text>
            <TextInput
            placeholder="Registration Number"
            style={{borderWidth:1,width:200,height:40,margin:10,padding:10,color:'gray'}}
            onChangeText={setRegNo}
            value={regNo}
            />
            <TextInput
            placeholder="Student Name"
            style={{borderWidth:1,width:200,height:40,margin:10,padding:10,color:'gray'}}
            onChangeText={setStudentName}
            value={studentName}
            />
            <TextInput
            placeholder="Password"
            style={{borderWidth:1,width:200,height:40,margin:10,padding:10,color:'gray'}}
            onChangeText={setPassword}
            value={password}
            />
             <Button
            title="Register Student"
            onPress={handleRegistration}
            />
             <Button
            title="get Student"
            onPress={handleremove}
            />
        </View>
        <View style={{marginTop:20}}>
            <Text>want to search any student! <Button
            title="Click Here"
            style={{}}
            onPress={()=>navigation.navigate("SearchScreen")}
            /></Text>
        </View>
        </View>
    )
}
export default StudentRegScreen;