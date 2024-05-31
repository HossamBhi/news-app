import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {Loader} from '../../src/components';

describe('LoaderComponent', () => {
  it('should render a Loader', () => {
    render(<Loader />);
    expect(screen.getByText(/Loading/i)).toBeTruthy();
  });
});
