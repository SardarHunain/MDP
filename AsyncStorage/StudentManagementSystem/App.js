import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/Admin/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentRegScreen from './Screens/Admin/StudentRegScreen';
import SearchScreen from './Screens/Admin/SearchScreen';
import StudentLoginScreen from './Screens/Student/StudentLoginScreen';
import HomeScreen from './Screens/Student/HomeScreen';
import SearchScreen1 from './Screens/Student/SearchScreen1';
import CourseRegScreen from './Screens/Student/CourseRegScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StudentRegistrationScreen" component={StudentRegScreen}/>
      <Stack.Screen name="Search Screen" component={SearchScreen}/> */}
      <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Search Screen" component={SearchScreen1}/>
      <Stack.Screen name="Course Registration Screen" component={CourseRegScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
