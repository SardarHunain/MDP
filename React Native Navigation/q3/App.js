import React,{useState} from 'react'
import {View,Text,Button,TextInput} from 'react-native'


const Screen1 = ({navigation})=>{

const [text,setText] = useState("")

const handleRndom = ()=>{
    const rand = Math.floor(Math.random()*100)+1
    setText(rand)
}
const handleCounter = ()=>{
  return(
    setText(text+1)
  )
}

    return(
      <View>
        <TextInput
        style={{borderWidth:3,padding:6,color:"gray"}}
        value={text}
        />
        <Button
        title="Random"
        onPress={handleRndom}
        />
        <Button
        title="Counter"
        onPress={handleCounter}
        />
        <Button
        title="Send"
        onPress={()=>navigation.navigate("Screen2",{text:text})}
        />
      </View>
    )
}

const Screen2 = ({route})=>{
  return(
    <Text>The value is :{route.params.text}</Text>
  )
}
const App = ()=>{
  return(
    <View>
      <Screen1/>
      <Screen2/>
    </View>
  )
}

export default App;