import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '@/styles';
import * as S from './styles';
import {ICardGun} from '@/types';

const CardGun: React.FC<ICardGun> = ({
  gunName,
  typeGun,
  brandImage,
  gunImage,
  deleteButton,
  detailsButton,
}) => {
  return (
    <S.Container>
      <S.DivDad>
        <S.DivTitle>
          <S.IntroText>{gunName}</S.IntroText>
          <S.SubText>{typeGun}</S.SubText>
        </S.DivTitle>
        <S.Avatar source={brandImage} resizeMode="contain" />
      </S.DivDad>
      <S.Gun source={gunImage} resizeMode="contain" />
      <S.DivButton>
        <S.DetailsButton onPress={detailsButton}>
          <S.SubText>Detalhes</S.SubText>
        </S.DetailsButton>
        <S.DeleteButton onPress={deleteButton}>
          <Icon size={20} name="delete" color={theme.colors.common.WHITE} />
        </S.DeleteButton>
      </S.DivButton>
    </S.Container>
  );
};

export default CardGun;
