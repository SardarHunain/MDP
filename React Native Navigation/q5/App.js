import React,{useState} from 'react'
import {View,Text,Button,TextInput} from 'react-native'


const Home = ({navigation})=>{

const [text,setText] = useState("")
const handleRandom = ()=>{
  const rand = Math.floor(Math.random()*3)+1
  setText(rand)
}

    return(
      <View>
        <TextInput
        style={{borderWidth:3,padding:6,color:"gray"}}
        value={text}
        />
        
        <Button
        title="Random"
        onPress={handleRandom}
        />
        <Button
        title="Send"
        onPress={()=>navigation.navigate("Screen2",{text:text})}
        />
      </View>
    )
}

const Display = ({route})=>{
  const {text} = route.params.text
  const textHandler = ()=>{
      if(text===1)
  {
    return "one"
  }
  else if(text===2)
  {
    return "two"
  }
  else
  {return "three"}
 }

  return(
    <Text>The Number received is {textHandler}</Text>
  )
}
const App = ()=>{
  return(
    <View>
      <Home/>
      <Display/>
    </View>
  )
}

export default App;