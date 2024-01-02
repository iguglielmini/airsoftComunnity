import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../src/components';
import ExampleImg from '../../src/assets/images/intro2.png';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: jest.fn(),
    }),
  };
});

describe('<Header />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o título padrão quando não houver título prop', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>,
    );
    expect(getByText('Airsoft Community')).toBeTruthy();
  });

  it('deve renderizar o título fornecido via prop', () => {
    const title = 'Custom Title';
    const {getByText} = render(
      <NavigationContainer>
        <Header title={title} />
      </NavigationContainer>,
    );
    expect(getByText(title)).toBeTruthy();
  });

  it('deve renderizar o ícone de seta para voltar se prop gobackIcon for true', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Header gobackIcon />
      </NavigationContainer>,
    );
    expect(getByTestId('goback-icon')).toBeTruthy();
  });

  it('deve chamar a função de voltar quando o ícone de seta para voltar é pressionado', () => {
    const mockGoBack = jest.fn();

    jest.mock('@react-navigation/native', () => {
      return {
        useNavigation: () => ({
          goBack: mockGoBack,
        }),
      };
    });

    const {getByTestId} = render(
      <NavigationContainer>
        <Header gobackIcon={true} />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('goback-icon'));
  });

  it('deve renderizar a imagem do usuário quando gobackIcon não é fornecido', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>,
    );

    const userImage = getByTestId('user-image');
    expect(userImage.props.source).toEqual(ExampleImg);
  });

  it('deve renderizar o ícone de notificação', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>,
    );
    expect(getByTestId('notification-icon')).toBeTruthy();
  });
});
