import {View} from 'react-native';
import CustomText from './CustomText';

const Loader = () => (
  <View className="flex-1 justify-center items-center text-center">
    <CustomText className="text-3xl text-center" text="Loading..." />
  </View>
);

export default Loader;
