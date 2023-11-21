import React from 'react';
import {Text} from 'react-native';

import * as S from './styles';
import {SectionImage} from '@/components';

const Home: React.FC = () => {
  return (
    <S.Container>
      <SectionImage
        title={'Bem-vindo ao AirsoftBR'}
        subtitle={'Veja a operação e equipamentos perto de você'}
      />
      <S.ContentIntroText>
        <S.IntroText>Próximas Operação</S.IntroText>
      </S.ContentIntroText>
    </S.Container>
  );
};

export default Home;
