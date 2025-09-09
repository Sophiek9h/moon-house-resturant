import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from 'expo-font';
import { Text } from "react-native";

export default function RootLayout() {

 const [fontsLoaded] = useFonts({
  'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
  'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
  'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
  'Nunito-Italic': require('../assets/fonts/Nunito-Italic.ttf'),
  'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
  'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
  'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
  'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
});

    if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or SplashScreen
  }
  return <Stack 
    screenOptions={{headerShown: false}}
  />;
}
