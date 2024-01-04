import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CardProduct} from '../../src/components'; // Ajuste o caminho do import conforme necessário

describe('CardProduct', () => {
  const mockTitleEvent = 'Test Product';
  const mockDetailsPress = jest.fn();
  const mockImage = {
    uri: 'https://dcdn.mitiendanube.com/stores/001/125/497/products/qgk1105-11-7b7da24e72a6cf280615856615277447-480-0.jpg',
  };

  it('renders correctly', () => {
    const {getByText} = render(
      <CardProduct
        titleEvent={mockTitleEvent}
        detailsPress={mockDetailsPress}
        image={mockImage}
      />,
    );

    expect(getByText(mockTitleEvent)).toBeTruthy();
    expect(getByText('Nunca usada, com 1 bateria junto...')).toBeTruthy();
    expect(getByText('Saiba mais')).toBeTruthy();
    expect(getByText('R$ 1300,00')).toBeTruthy();
  });

  it('calls detailsPress when pressed', () => {
    const {getByTestId} = render(
      <CardProduct
        titleEvent={mockTitleEvent}
        detailsPress={mockDetailsPress}
        image={mockImage}
      />,
    );

    fireEvent.press(getByTestId('ImageButton'));
    expect(mockDetailsPress).toHaveBeenCalled();
  });
});
