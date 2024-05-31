import {useQuery} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import {NewsType} from '../utils/types';
// import {newsData} from '../db';
const useNews = () => {
  return useQuery<{articles: NewsType[]}, Error>({
    queryKey: ['news'],
    queryFn: () =>
      // new Promise((resolve, reject) =>
      //   setTimeout(() => {
      //     resolve(newsData);
      //   }, 1000),
      // ),
      fetchNews(),
  });
};

const fetchNews = async () => {
  try {
    const {data} = await axios.get(
      `/everything?q=tesla&sortBy=publishedAt&apiKey=${Config.API_KEY}`,
    );
    return data;
  } catch (error) {
    if (
      error instanceof AxiosError &&
      error.response &&
      error.response.status === 404
    )
      return null;

    throw error;
  }
};

export default useNews;
