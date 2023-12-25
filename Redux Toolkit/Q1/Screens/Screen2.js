// Screen2.js
import React, { useState } from 'react';
import { View, TextInput,Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectStudent, updateStudent } from '../Store/Slices/studentSlice';

const Screen2 = ({navigation}) => {
  const dispatch = useDispatch();
  const { studentName, studentAge } = useSelector(selectStudent);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentAge, setNewStudentAge] = useState('');

  const handleUpdateStudent = () => {
    dispatch(updateStudent({ studentName: newStudentName, studentAge: newStudentAge }));
  };

  return (
    <View>
      <TextInput
        placeholder="Student Name"
        value={newStudentName}
        onChangeText={(text) => setNewStudentName(text)}
      />
      <TextInput
        placeholder="Student Age"
        value={newStudentAge}
        onChangeText={(text) => setNewStudentAge(text)}
      />
      <Button title="Update Student" onPress={handleUpdateStudent} />
      <View>
        <Text>Student Name: {studentName}</Text>
        <Text>Student Age: {studentAge}</Text>
      </View>
    </View>
  );
};

export default Screen2;
