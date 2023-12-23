import React,{useState} from 'react'
import {View,Text,Button,TextInput} from 'react-native'


const Home = ({navigation})=>{
const [city,setCity] = useState("")
const [country,setCountry] = useState("")


    return(
      <View>
        <TextInput
        style={{borderWidth:3,padding:6,color:"gray"}}
        onChangeText={setCity}
        placeholder="enter city"
        />
        <TextInput
        style={{borderWidth:3,padding:6,color:"gray"}}
        onChangeText={setCountry}
        placeholder="enter country"
        />
        <Button
        title="Send"
        onPress={()=>navigation.navigate("Screen2",{city:city,country:country})}
        />
      </View>
    )
}

const Screen2 = ({route})=>{
  return(
    <Text>{route.params.city},{route.params.country}</Text>
  )
}
const App = ()=>{
  return(
    <View>
      <Home/>
      <Screen2/>
    </View>
  )
}

export default App;