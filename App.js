import { Login } from '@pages/Login';
import { View } from 'react-native';
import tw from 'twrnc';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(80, 150, 205)",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <View style={tw`px-[15px]`}>
          <Login />
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}