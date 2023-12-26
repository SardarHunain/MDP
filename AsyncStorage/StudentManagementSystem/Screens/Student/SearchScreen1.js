import React, { useState } from "react";
import {Text,View,TextInput,Button} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
const SearchScreen1 = ()=>{
    
    const [courseName,setCourseName] = useState("")
    const [course,setCourse] = useState({
        courseId:"",
        courseTitle:""
    })
    const handleSearch = async()=>{
        let courses = await AsyncStorage.getItem("Courses")
        
        courses = JSON.parse(courses)
        courses.map((course)=>{
            if( course.courseTitle==courseName)
            {
                alert("course found")
                setCourse({
                    courseId:course.courseId,
                    courseTitle:course.courseTitle
                })
            }
           
        })
    }
    return(
        <View>
            <Text>Welcome to Course Search Screen</Text>
            <TextInput
            placeholder="enter course title"
            value={courseName}
            onChangeText={setCourseName}
            />
            <Button
            title="Search->"
            onPress={handleSearch}
            />
            <Text>course id is:{course.courseId}</Text>
            <Text>course title is:{course.courseTitle}</Text>

        </View>
    )
}

export default SearchScreen1