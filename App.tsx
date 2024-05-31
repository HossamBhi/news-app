import axios from 'axios';
import {NativeWindStyleSheet} from 'nativewind';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Config from 'react-native-config';
import MainStack from './src/navigation';
import Providers from './src/providers';

axios.defaults.baseURL = Config.API_URL;

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Providers>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainStack />
      </SafeAreaView>
    </Providers>
  );
};

export default App;
