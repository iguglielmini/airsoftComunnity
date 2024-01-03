import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CustomButton} from '../src/components'; // Ajuste o caminho do import conforme necessário

describe('CustomButton', () => {
  const mockOnPress = jest.fn();
  const mockTitle = 'Test Button';
  const mockSize = 'lg';

  it('renders correctly', () => {
    const {getByText} = render(
      <CustomButton onPress={mockOnPress} title={mockTitle} size={mockSize} />,
    );

    expect(getByText(mockTitle)).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByText} = render(
      <CustomButton onPress={mockOnPress} title={mockTitle} size={mockSize} />,
    );

    fireEvent.press(getByText(mockTitle));
    expect(mockOnPress).toHaveBeenCalled();
  });

  // Adicione mais testes conforme necessário, por exemplo, para diferentes tamanhos
});
