import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {NewsType} from '../utils/types';

export type RootStackParamList = {
  News: undefined;
  NewsDetails: {news: NewsType};
};

export type ReactNavigationProps = NativeStackScreenProps<RootStackParamList>;

export type ScreenNavigationProp = ReactNavigationProps['navigation'];
export type ScreenRouteProp = ReactNavigationProps['route'];
export type NewsDetailsNav = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetails'
>;
