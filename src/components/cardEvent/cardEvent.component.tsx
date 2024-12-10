import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';
import {ICardEventProps} from '@/types';

const CardEvent: React.FC<ICardEventProps> = ({
  image,
  titleEvent,
  calendario,
  locationUF,
  detailsPress,
}) => {
  return (
    <S.Content testID="Content" onPress={detailsPress}>
      <S.ImageCard source={image} />
      <S.DivInfo>
        <S.Title>{titleEvent}</S.Title>
        <S.Box>
          <Icon size={12} name="calendar" color="#900" />
          <S.InfoText>{calendario}</S.InfoText>
        </S.Box>
        <S.Box>
          <Icon size={12} name="map-pin" color="#900" />
          <S.InfoText>{locationUF}</S.InfoText>
        </S.Box>
        <S.Link>Saiba mais</S.Link>
      </S.DivInfo>
    </S.Content>
  );
};

export default CardEvent;
