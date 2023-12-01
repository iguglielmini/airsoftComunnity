# Exemplos componentes e Pages

## Componentes e Page

Este documento fornece uma visão geral e explicações dos testes unitários escritos para o componente ProductDetailPage em um aplicativo React Native. Os testes são implementados usando a biblioteca @testing-library/react-native.

# Estrutura do Teste

## O código de teste consiste em várias partes:

- Mocks
Redux e Navegação: Mocks são usados para react-redux e @react-navigation/native, permitindo simular o estado da loja Redux e a funcionalidade de navegação.
- Componentes Externos: Os componentes de @livelo/react-native-livelo-components e @livelo/alchemy-mobile são mockados. Isso garante que os testes não dependam da implementação interna desses componentes.
- Hooks Personalizados: Os hooks useInstallments, usePostalCode, e useProductDetail são mockados. Isso permite simular os retornos desses hooks para testar o componente em diferentes cenários.

## Exemplo

- 1- Mock do Redux (react-redux):

Este mock substitui o comportamento padrão do useSelector do Redux. Isso é usado para simular o estado global da aplicação sem realmente se conectar à store do Redux.

```
jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => ({
    favoriteSkus: [],
    lastFavoriteAdded: '',
    deliveryTypes: [],
  })),
}));

```

- 2- Mock do React Navigation::

Mocks useNavigation e useRoute do @react-navigation/native. Isso permite simular a passagem de parâmetros (params) através da navegação, como productId e skuId.

```
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: () => ({
    params: {
      productId: '123',
      skuId: '4',
    },
  }),
}));

```

- 3- Mock de Componentes Externos:

Substitui componentes de @livelo/react-native-livelo-components e @livelo/alchemy-mobile por versões simplificadas, evitando a necessidade de renderizar componentes complexos e de terceiros durante os testes.
```
jest.mock('@livelo/react-native-livelo-components', () => ({
  MktpPdpTemplate: () => 'MktpPdpTemplate',
  TapumeTemplate: () => 'TapumeTemplate',
}));

jest.mock('@livelo/alchemy-mobile', () => ({
  Flex: 'Flex',
  Loading: 'Loading',
}));
```

- 4- Mock de Hooks Personalizados:

useInstallments, usePostalCode, e useProductDetail são mockados para controlar os retornos desses hooks. Isso simula os cenários de teste, como os dados do produto a serem utilizados pelo componente.

```
jest.mock('../../hooks/useInstallments', () => ({
  useInstallmentsData: jest.fn().mockReturnValue({
    getInstallmentsPayments: jest.fn(),
  }),
}));

jest.mock('../../hooks/usePostalCode', () => ({
  usePostalCode: jest.fn().mockReturnValue({
    // valores do hook
  }),
}));

jest.mock('../../hooks/useProductDetail', () => ({
  useProductDetail: jest.fn().mockReturnValue({
    productDetail: {
      variants: mockVariants,
    },
  }),
}));

```

# Testes
## Inicialização do Componente:
- Testamos se o componente ProductDetailPage é inicializado corretamente. Verificamos a presença de um componente de carregamento (loading) para confirmar se o componente foi renderizado.
```
it('Should initialize component correctly', () => {
  const { getByTestId } = render(<ProductDetailPage />)
  const loadingComponent = getByTestId('loading-component')
  expect(loadingComponent).toBeTruthy()
});
```
## Teste de Renderização Após o Carregamento de Dados:

Testa o comportamento do componente após a interação do usuário e o carregamento de dados. Utiliza fireEvent para simular uma ação do usuário e act para lidar com atualizações assíncronas do estado.
```
it('Should render component after data load', async () => {
  const { getByTestId, queryByTestId } = render(<ProductDetailPage />);

  const press = await getByTestId('TouchableOpacity_hardwareBackPress');
  await act(async () => {
    fireEvent.press(press);
  });

  const loadingComponent = queryByTestId('loading-component');
  expect(loadingComponent).toBeNull();

  const pdpTemplate = getByTestId('pdp-template');
  const zoomCarousel = getByTestId('zoom-carousel');
  expect(pdpTemplate).toBeTruthy();
  expect(zoomCarousel).toBeTruthy();
});

```

# Conclusão
Cada parte do teste foi criada para garantir que o ProductDetailPage se comporte conforme esperado, desde a inicialização até a resposta a interações do usuário e a atualização após o carregamento de dados. Os mocks permitem simular o ambiente necessário, enquanto as asserções confirmam que o componente se comporta como pretendido em diferentes cenários.









