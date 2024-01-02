import React from 'react';

import * as S from './styles';
import {ICardProduct} from '@/types';

const CardProduct: React.FC<ICardProduct> = ({
  image,
  titleEvent,
  detailsPress,
}) => {
  return (
    <S.ImageButton testID="ImageButton" onPress={detailsPress}>
      <S.ImageCard imageStyle={{borderRadius: 10}} source={image}>
        <S.Content
          colors={['#1E20234D', '#191919CC', '#030303']}
          locations={[0, 0.3, 1]}>
          <S.Title>{titleEvent}</S.Title>
          <S.SubTitle>Nunca usada, com 1 bateria junto...</S.SubTitle>
          <S.Box>
            <S.Link>Saiba mais</S.Link>
            <S.PriceText>R$ 1300,00</S.PriceText>
          </S.Box>
        </S.Content>
      </S.ImageCard>
    </S.ImageButton>
  );
};

export default CardProduct;
