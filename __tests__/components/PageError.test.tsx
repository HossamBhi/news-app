import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {PageError} from '../../src/components';

describe('PageError', () => {
  it('should render page error with error message', () => {
    render(<PageError message={'I am error'} />);

    expect(screen.getByText(/I am/i)).toBeTruthy();
  });
});
