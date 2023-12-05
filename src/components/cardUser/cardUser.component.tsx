import React from 'react';

import ExampleImg from '@/assets/images/introImage.png';
import * as S from './styles';
import {ICardUser} from '@/types';

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
