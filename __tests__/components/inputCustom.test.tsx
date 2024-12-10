import React from 'react';
import {render} from '@testing-library/react-native';
import {InputCustom} from '../../src/components';

describe('InputCustom', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(
      <InputCustom type="text" placeholder="Test Input" />,
    );

    expect(getByPlaceholderText('Test Input')).toBeTruthy();
  });

  it('sets keyboardType to numeric for type number', () => {
    const {getByPlaceholderText} = render(
      <InputCustom type="number" placeholder="Number Input" />,
    );

    const input = getByPlaceholderText('Number Input');
    expect(input.props.keyboardType).toBe('numeric');
  });

  it('sets secureTextEntry to true for type password', () => {
    const {getByPlaceholderText} = render(
      <InputCustom type="password" placeholder="Password Input" />,
    );

    const input = getByPlaceholderText('Password Input');
    expect(input.props.secureTextEntry).toBeTruthy();
  });
});
