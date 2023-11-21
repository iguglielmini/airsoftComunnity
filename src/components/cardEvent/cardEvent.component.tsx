import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

const CardEvent: React.FC = () => {
  return (
    <S.Content>
      <S.ImageCard source={require('@/assets/images/introImage.png')} />
      <S.Title>Operação PB 01</S.Title>
    </S.Content>
  );
};

export default CardEvent;
