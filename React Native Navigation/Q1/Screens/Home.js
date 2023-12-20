import React from "react";
import { View,Text, Button } from "react-native";
const Home = ({navigation})=>{
    return(
        <View>
            <Text>HomeScreen</Text>
            <Button
            title="go to display screen"
            onPress={()=>navigation.navigate("Display",{number1:12,number2:13})}
            />
        </View>
    )
}
export default Home;