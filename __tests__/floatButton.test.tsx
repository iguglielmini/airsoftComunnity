import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {FloatButton} from '../src/components'; // Ajuste o caminho do import conforme necessário

describe('FloatButton', () => {
  it('renders correctly with initial props', () => {
    const {getByText} = render(
      <FloatButton
        titleButton="Test Button"
        redirect={() => {}}
        loading={false}
        date="01/01/2024"
        hour="12:00"
      />,
    );

    expect(getByText('Test Button')).toBeTruthy();
    expect(getByText('01/01/2024')).toBeTruthy();
    expect(getByText('12:00')).toBeTruthy();
  });

  it('shows ActivityIndicator when loading is true', () => {
    const {getByTestId} = render(
      <FloatButton
        titleButton="Test Button"
        redirect={() => {}}
        loading={true}
        date="01/01/2024"
        hour="12:00"
      />,
    );

    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });

  it('changes button text after successful redirect', async () => {
    const mockRedirect = jest.fn(() => Promise.resolve());
    const {getByText} = render(
      <FloatButton
        titleButton="Test Button"
        redirect={mockRedirect}
        loading={false}
        date="01/01/2024"
        hour="12:00"
      />,
    );

    const button = getByText('Test Button');
    await act(async () => {
      fireEvent.press(button);
    });

    expect(mockRedirect).toHaveBeenCalled();
    expect(getByText('Estou participando')).toBeTruthy();
  });
});
