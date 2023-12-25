// Screen1.js
import React, { useState } from 'react';
import { View,Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity, updateCity } from '../Store/Slices/citySlice';

const Screen1 = ({navigation}) => {
  const dispatch = useDispatch();
  const { cityname, citylocation } = useSelector(selectCity);
  const [newCityName, setNewCityName] = useState('');
  const [newCityLocation, setNewCityLocation] = useState('');

  const handleUpdateCity = () => {
    dispatch(updateCity({ cityname: newCityName, citylocation: newCityLocation }));
  };

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <TextInput
        placeholder="City Name"
        value={newCityName}
        onChangeText={(text) => setNewCityName(text)}
      />
      <TextInput
        placeholder="City Location"
        value={newCityLocation}
        onChangeText={(text) => setNewCityLocation(text)}
      />
      <Button title="Update City" onPress={handleUpdateCity} />
      <View>
        <Text>City Name: {cityname}</Text>
        <Text>City Location: {citylocation}</Text>
      </View>
      <Button
      title='move to screen2'
      onPress={()=>navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default Screen1;
