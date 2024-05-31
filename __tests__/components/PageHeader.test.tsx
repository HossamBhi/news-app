import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {PageHeader} from '../../src/components';

describe('PageHeader', () => {
  it('should render page header with correct title', () => {
    render(
      <NavigationContainer>
        <PageHeader title="I am a title for screen" />
      </NavigationContainer>,
    );

    expect(screen.getByText(/I am a title/i)).toBeTruthy();
  });

  it('should render page header with correct title and back button', () => {
    render(
      <NavigationContainer>
        <PageHeader isShowBack title="I am a title for screen" />
      </NavigationContainer>,
    );

    expect(screen.getByText(/I am a title/i)).toBeTruthy();
    expect(screen.getByTestId('backButton')).toBeTruthy();
  });
});
