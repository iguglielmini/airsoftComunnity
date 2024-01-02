import React from 'react';
import {render} from '@testing-library/react-native';
import {CardUser} from '../src/components'; // Ajuste o caminho do import conforme necessário

describe('CardUser', () => {
  const mockName = 'John Doe';
  const mockType = 'User Type';

  it('renders correctly', () => {
    const {getByTestId} = render(
      <CardUser name={mockName} type={mockType} hasInfoUser={true} />,
    );

    expect(getByTestId('ImageUser')).toBeTruthy();
  });

  it('displays name and type when hasInfoUser is true', () => {
    const {getByText} = render(
      <CardUser name={mockName} type={mockType} hasInfoUser={true} />,
    );

    expect(getByText(mockName)).toBeTruthy();
    expect(getByText(mockType)).toBeTruthy();
  });

  it('does not display name and type when hasInfoUser is false', () => {
    const {queryByText} = render(
      <CardUser name={mockName} type={mockType} hasInfoUser={false} />,
    );

    expect(queryByText(mockName)).toBeNull();
    expect(queryByText(mockType)).toBeNull();
  });

  // Adicione mais testes conforme necessário
});
