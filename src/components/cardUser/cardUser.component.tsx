import React from 'react';
import {View} from 'react-native';

import ExampleImg from '@/assets/images/introImage.png';
import * as S from './styles';

interface ICardUser {
  name?: string;
  type?: string;
  image?: string;
  hasInfoUser?: boolean;
}

const cardUser: React.FC<ICardUser> = ({name, type, image, hasInfoUser}) => {
  return (
    <S.Container>
      <S.CardUser>
        <S.ImageUser source={ExampleImg} resizeMode="cover" />
      </S.CardUser>
      {hasInfoUser && (
        <S.Box>
          <S.TextName>{name}</S.TextName>
          <S.TextSub>{type}</S.TextSub>
        </S.Box>
      )}
    </S.Container>
  );
};

export default cardUser;
