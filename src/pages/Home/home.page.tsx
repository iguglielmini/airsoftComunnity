import React from 'react';
import {CardEvent, CardProduct, CardStore, SectionImage} from '@/components';
import * as S from './styles';
import ImgTest from '@/assets/images/introImage.png';

const Home: React.FC = () => {
  return (
    <S.Container>
      <SectionImage
        title={'Bem-vindo ao AirsoftBR'}
        subtitle={'Veja a operação e equipamentos perto de você'}
      />
      <S.BoxV>
        <S.ContentIntroText>
          <S.IntroText>Próximas Operação</S.IntroText>
        </S.ContentIntroText>
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardEvent
            image={ImgTest}
            locationUF="PB"
            titleEvent="Operação PB 01"
            calendario="26/11/23 - 12:00"
            detailsPress={() => {}}
          />
        </S.BoxH>
        {/* anuncios */}
        <S.ContentIntroText>
          <S.IntroText>Anuncios de Produtos</S.IntroText>
        </S.ContentIntroText>
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardProduct
            image={ImgTest}
            titleEvent="Operação PB 01"
            detailsPress={() => {}}
          />
        </S.BoxH>
        {/* Lojas proximas */}
        <S.ContentIntroText>
          <S.IntroText>Lojas próximas</S.IntroText>
        </S.ContentIntroText>
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
