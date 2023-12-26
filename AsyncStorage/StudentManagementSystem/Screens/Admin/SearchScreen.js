import React, { useState } from "react";
import {Text,View,TextInput,Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ()=>{
    
    const [value,setValue] = useState("")
    const [studDetails,setStudDetails] = useState({
        studentName:"",
        regNo:""
    })
    const handleSearch = async()=>{
        let students = await AsyncStorage.getItem("student")
        
        students = JSON.parse(students)
        students.map((student)=>{
            if(student.studentName==value || student.regNo==value)
            {
                alert("student found")
                setStudDetails({
                    studentName:student.studentName,
                    regNo:student.regNo
                })
            }
           
        })
    }
    
    return(
        <View>
            <Text>Welcome to Student Search Screen</Text>
            <TextInput
            placeholder="name or regNo"
            style={{borderWidth:1,width:200,height:40,margin:10,padding:10,color:'gray'}}
            onChangeText={setValue}
            value={value}
            />
            <Button
            title="Search Student"
            onPress={handleSearch}
            />
            <Text>Student Name:{studDetails.studentName}</Text>
            <Text>Student Registration Number:{studDetails.regNo}</Text>
        </View>
    )
}

export default SearchScreen