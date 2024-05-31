import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text} from 'react-native';
import {ScreenNavigationProp} from '../navigation/types';
import {NewsType} from '../utils/types';
import CustomText from './CustomText';

const NewsCard = ({item}: {item: NewsType}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Pressable
      onPress={() => navigation.push('NewsDetails', {news: item})}
      className="pb-4">
      <Image
        source={
          item.urlToImage
            ? {uri: item.urlToImage}
            : require('../assets/logo.png')
        }
        resizeMode="contain"
        className="w-full h-[200px]"
      />
      <CustomText
        className="text-md py-2 px-2 font-bold"
        text={
          item.title.length > 100
            ? item.title.slice(0, 100) + '...'
            : item.title
        }
      />
      <CustomText
        text={item.description || ''}
        className="text-md opacity-80 pb-2 px-2"
      />
      <CustomText
        text={
          new Date(item.publishedAt)?.toLocaleTimeString() +
          ' ' +
          new Date(item.publishedAt)?.toLocaleDateString()
        }
        className="text-md opacity-80 pb-2 px-2 text-right"
      />
    </Pressable>
  );
};

export default NewsCard;
