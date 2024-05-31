import {FlatList, View} from 'react-native';
import {Loader, NewsCard, PageError} from '../components';
import PageWrapper from '../components/PageWrapper';
import {useNews} from '../hooks';

const News = () => {
  const {data, error, isPending, isError} = useNews();

  const renderNews = () => {
    if (isPending) return <Loader />;

    if (isError) return <PageError message={error.message} />;

    return (
      <FlatList
        className="w-full"
        data={data?.articles}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item}) => <NewsCard item={item} />}
        ItemSeparatorComponent={() => (
          <View className="w-full h-[1px] bg-primary my-2" />
        )}
      />
    );
  };

  return <PageWrapper title="News">{renderNews()}</PageWrapper>;
};

export default News;
