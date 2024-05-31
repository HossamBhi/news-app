import {Image, Linking, ScrollView, TouchableOpacity, View} from 'react-native';
import {CustomText} from '../components';
import PageWrapper from '../components/PageWrapper';
import {NewsDetailsNav} from '../navigation/types';

const NewsDetails = ({route}: NewsDetailsNav) => {
  const {news} = route.params;
  return (
    <PageWrapper title="News Details" isShowBack>
      <ScrollView className="px-2">
        <Image
          source={
            news.urlToImage
              ? {uri: news.urlToImage}
              : require('../assets/logo.png')
          }
          resizeMode="contain"
          className="flex-1 h-[200px]"
        />
        <CustomText text={news.title} className="text-xl pb-2 text-black" />
        <CustomText
          text={news.content || ''}
          className="text-md opacity-80 text-black"
        />
        <TouchableOpacity
          onPress={() => Linking.openURL(news.url)}
          className="px-6 py-2 self-end rounded-md bg-primary mt-6">
          <CustomText text="Show more" className="text-white font-bold" />
        </TouchableOpacity>
      </ScrollView>
    </PageWrapper>
  );
};

export default NewsDetails;
