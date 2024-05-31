import {useQuery} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import {NewsType} from '../utils/types';

const useNews = () => {
  return useQuery<{articles: NewsType[]}, Error>({
    queryKey: ['news'],
    queryFn: () => fetchNews(),
  });
};

const fetchNews = async () => {
  try {
    const {data} = await axios.get(
      `/everything?q=tesla&from=2024-04-29&sortBy=publishedAt&apiKey=${Config.API_KEY}`,
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
