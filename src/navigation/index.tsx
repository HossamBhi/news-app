import {createStackNavigator} from '@react-navigation/stack';
import {News, NewsDetails} from '../pages';
import {RootStackParamList} from './types';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="NewsDetails" component={NewsDetails} />
  </Stack.Navigator>
);

export default MainStack;
