import React from 'react';

import * as S from './styles';
import {ICardEventProps} from '@/types';

const CardProduct: React.FC<ICardEventProps> = ({
  image,
  titleEvent,
  detailsPress,
}) => {
  return (
    // <S.Content onPress={() => {}}>
    <S.ImageCard source={require('@/assets/images/introImage.png')}>
      <S.Title>{titleEvent}</S.Title>
      <S.Link>Saiba mais</S.Link>
    </S.ImageCard>
    // </S.Content>
  );
};

export default CardProduct;
