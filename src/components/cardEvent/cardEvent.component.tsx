import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';

interface ICardEventProps {
  image?: string;
  titleEvent: string;
  calendario: string;
  locationUF: string;
  detailsPress?: () => void;
}

const CardEvent: React.FC<ICardEventProps> = ({
  image,
  titleEvent,
  calendario,
  locationUF,
  detailsPress,
}) => {
  return (
    <S.Content onPress={detailsPress}>
      <S.ImageCard source={require('@/assets/images/introImage.png')} />
      <S.Title>{titleEvent}</S.Title>
      <S.Box>
        <Icon size={12} name="calendar" color="#900" />
        <S.InfoText>{calendario}</S.InfoText>
      </S.Box>
      <S.Box>
        <Icon size={12} name="calendar" color="#900" />
        <S.InfoText>{locationUF}</S.InfoText>
      </S.Box>
      <S.Link>Saiba mais</S.Link>
    </S.Content>
  );
};

export default CardEvent;
