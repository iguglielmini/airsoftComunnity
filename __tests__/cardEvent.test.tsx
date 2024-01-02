import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {CardEvent} from '../src/components';
describe('CardEvent', () => {
  const mockTitleEvent = 'Test Event';
  const mockCalendario = '01/01/2024';
  const mockLocationUF = 'Test Location';
  const mockDetailsPress = jest.fn();

  it('renders correctly', () => {
    const {getByText} = render(
      <CardEvent
        titleEvent={mockTitleEvent}
        calendario={mockCalendario}
        locationUF={mockLocationUF}
        detailsPress={mockDetailsPress}
      />,
    );

    expect(getByText(mockTitleEvent)).toBeTruthy();
    expect(getByText(mockCalendario)).toBeTruthy();
    expect(getByText(mockLocationUF)).toBeTruthy();
    expect(getByText('Saiba mais')).toBeTruthy();
  });

  it('calls detailsPress when pressed', () => {
    const {getByTestId} = render(
      <CardEvent
        titleEvent={mockTitleEvent}
        calendario={mockCalendario}
        locationUF={mockLocationUF}
        detailsPress={mockDetailsPress}
      />,
    );

    fireEvent.press(getByTestId('Content'));
    expect(mockDetailsPress).toHaveBeenCalled();
  });
});
