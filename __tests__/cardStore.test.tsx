import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CardStore} from '../src/components'; // Ajuste o caminho do import conforme necessário
import * as Linking from 'react-native';

jest.mock('react-native/Libraries/Settings/Settings', () => {
  return {
    get: jest.fn(),
    set: jest.fn(),
  };
});

describe('CardStore', () => {
  const mockImage = {uri: 'https://example.com/test.jpg'};
  const mockTitleEvent = 'Test Store';
  const mockEndereco = 'Test Address';
  const mockTelefone = '1234567890';
  const mockWpp = '0987654321';
  const mockDetailsPress = jest.fn();
  const mockMapsOpen = jest.fn();

  it('renders correctly', () => {
    const {getByText} = render(
      <CardStore
        wpp={mockWpp}
        image={mockImage}
        titleEvent={mockTitleEvent}
        endereco={mockEndereco}
        telefone={mockTelefone}
        detailsPress={mockDetailsPress}
        mapsOpen={mockMapsOpen}
      />,
    );

    expect(getByText(mockTitleEvent)).toBeTruthy();
    expect(getByText(mockEndereco)).toBeTruthy();
    expect(getByText('Saiba mais')).toBeTruthy();
  });

  it('calls mapsOpen when maps button is pressed', () => {
    const {getByText} = render(
      <CardStore
        wpp={mockWpp}
        image={mockImage}
        titleEvent={mockTitleEvent}
        endereco={mockEndereco}
        telefone={mockTelefone}
        detailsPress={mockDetailsPress}
        mapsOpen={mockMapsOpen}
      />,
    );

    fireEvent.press(getByText(mockEndereco));
    expect(mockMapsOpen).toHaveBeenCalled();
  });
});
