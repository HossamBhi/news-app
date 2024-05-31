import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from './CustomText';

export type PageHeaderTypes = {
  title: string;
  isShowBack?: boolean;
};

const PageHeader = ({title, isShowBack = false}: PageHeaderTypes) => {
  const navigation = useNavigation();
  return (
    <View className="w-full py-4 px-4 bg-primary mb-4 flex-row items-center">
      {isShowBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image testID='backButton' source={require('../assets/back.png')} className="w-6 h-6" />
        </TouchableOpacity>
      )}
      <CustomText className="px-4 font-bold text-white text-xl">
        {title}
      </CustomText>
    </View>
  );
};

export default PageHeader;
