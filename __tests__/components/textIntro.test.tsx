import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextIntro} from '../../src/components';

describe('TextIntro', () => {
  it('renders the title correctly', () => {
    const {getByText} = render(<TextIntro title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('renders the "Saiba mais" button when hasList is true', () => {
    const {getByText} = render(<TextIntro title="Test Title" hasList />);
    expect(getByText('Saiba mais')).toBeTruthy();
  });

  it('does not render the "Saiba mais" button when hasList is false', () => {
    const {queryByText} = render(
      <TextIntro title="Test Title" hasList={false} />,
    );
    expect(queryByText('Saiba mais')).toBeNull();
  });

  it('calls redirect function when "Saiba mais" button is pressed', () => {
    const mockRedirect = jest.fn();
    const {getByText} = render(
      <TextIntro title="Test Title" hasList redirect={mockRedirect} />,
    );

    const button = getByText('Saiba mais');
    fireEvent.press(button);

    expect(mockRedirect).toHaveBeenCalled();
  });
});
