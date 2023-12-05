import React from 'react';
import {
  CardEvent,
  CardProduct,
  CardStore,
  Header,
  SectionImage,
  TextIntro,
} from '@/components';
import * as S from './styles';
import ImgTest from '@/assets/images/introImage.png';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <Header />
      <S.BoxV>
        <SectionImage
          sizeHeight="sm"
          title={'Bem-vindo ao AirsoftBR'}
          subtitle={'Veja a operação e equipamentos perto de você'}
        />
        <TextIntro title="Próximos eventos" hasList />
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardEvent
            image={ImgTest}
            locationUF="PB"
            titleEvent="Operação PB 01"
            calendario="26/11/23 - 12:00"
            detailsPress={() => navigate('EventDetails')}
          />
        </S.BoxH>
        {/* anuncios */}
        <TextIntro title="Produtos a venda" hasList />
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardProduct
            image={ImgTest}
            titleEvent="Operação PB 01"
            detailsPress={() => {}}
          />
        </S.BoxH>
        {/* Lojas proximas */}
        <TextIntro title="Lojas mais proximas" hasList />
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardStore
            image={ImgTest}
            endereco="Av. epitacio pessoa, N 4595, tambau - Joao pessoa/Paraiba"
            titleEvent="Montana Airsoft"
            telefone="83999604027"
            wpp="83999604027"
            detailsPress={() => {}}
          />
        </S.BoxH>
      </S.BoxV>
    </S.Container>
  );
};

export default Home;
