import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CourseRegScreen = ({navigation}) => {
  
  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courses,setCourses] = useState([{
    courseId:"",
    courseTitle:""
  }])
  const handleRegisterCourse = async() => {

    setCourses((prevCourses) => [
        ...prevCourses,
        {
          courseId: courseId,
          courseTitle: courseTitle
        },
      ]);

      await AsyncStorage.setItem("Courses",JSON.stringify(courses))
      alert("course registered successfully")
      console.warn(await AsyncStorage.getItem("Courses"))
      
    // Handle the course registration logic here
   
    // Add your logic to save or process the registration data
  };

    const handleSearch = () => {
        navigation.navigate("Search Screen")
    }
  return (
    <View>
      <Text>Welcome to Course Registration Screen</Text>
      <TextInput
        placeholder="Course Id"
        value={courseId}
        onChangeText={(text) => setCourseId(text)}
      />
      <TextInput
        placeholder="Course Title"
        value={courseTitle}
        onChangeText={(text) => setCourseTitle(text)}
      />

      <Button title="Register Course" onPress={handleRegisterCourse} />
      <Button title="Search Course" onPress={handleSearch} />
      <Button title="Go to Home" onPress={()=>navigation.navigate("HomeScreen")} />
    </View>
  );
};

export default CourseRegScreen;
