import {View} from 'react-native';
import CustomText from './CustomText';

const PageError = ({message}: {message: string}) => (
  <View className="flex-1 justify-center items-center">
    <CustomText className="text-bold text-md" text={'Error: ' + message} />
  </View>
);

export default PageError;
