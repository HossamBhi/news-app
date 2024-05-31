import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';
import PageWrapper from '../../src/components/PageWrapper';

describe('PageWrapper', () => {
  it('should render page wrapper with correct title', () => {
    render(
      <NavigationContainer>
        <PageWrapper title="I am a title for screen" />
      </NavigationContainer>,
    );
    expect(screen.getByText(/I am a title/i)).toBeTruthy();
  });

  it('should render page wrapper with component', () => {
    render(
      <NavigationContainer>
        <PageWrapper title="I am a title for screen">
          <View testID="hello"></View>
        </PageWrapper>
      </NavigationContainer>,
    );
    expect(screen.getByTestId('hello')).toBeTruthy();
  });
});
