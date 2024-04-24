import React from 'react';
import {render} from '@testing-library/react-native';
import {SectionImage} from '../../src/components';

describe('SectionImage', () => {
  it('renderiza corretamente sem título e subtítulo', () => {
    const {getByTestId} = render(<SectionImage sizeHeight="md" />);
    const content = getByTestId('content');
    expect(content).toBeTruthy();
  });

  it('renderiza corretamente com título e subtítulo', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    const {getByText} = render(
      <SectionImage title={title} subtitle={subtitle} sizeHeight="md" />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(subtitle)).toBeTruthy();
  });

  it.each(['lg', 'md', 'sm'])('renders with sizeHeight %s', size => {
    const {getByTestId} = render(<SectionImage sizeHeight={size} />);

    // Verificar se o 'sizeHeight' é aplicado corretamente
    // Isto pode depender de como você implementou o uso do 'sizeHeight' em seus estilos
    // Por exemplo:
    // const content = getByTestId('content');
    // expect(content.props.style).toHaveProperty('algumaPropriedadeEspecífica', valorEsperadoParaSize);
  });

  // Adicione mais testes conforme necessário
});
