import { View } from 'react-native';
import tw from 'twrnc';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';
import { Register } from '@screens/Register';
import { RegisterWait } from '@screens/RegisterWait';
import { Main } from '@screens/Main';
import { CreateSchedule } from '@screens/CreateSchedule';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// import { firebaseConfig } from './firebaseConfig';

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(80, 150, 205)",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>

          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterWait" component={RegisterWait} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="CreateSchedule" component={CreateSchedule} />
          </Stack.Navigator>
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}