import React from "react";
import { View,Text } from "react-native";
const Display = ({route})=>{
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
            <Text>{route.params.number1}</Text>
            <Text>{route.params.number2}</Text>
        </View>
    )
}
export default Display;