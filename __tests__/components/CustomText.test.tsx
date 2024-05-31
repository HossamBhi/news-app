import React from 'react';
import {CustomText} from '../../src/components';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native';

describe('CustomText', () => {
  it('Render Text Component', () => {
    render(<CustomText text="Welcome" />);
    expect(screen.getByText('Welcome')).toBeTruthy();
  });
});
