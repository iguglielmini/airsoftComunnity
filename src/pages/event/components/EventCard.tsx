import React from 'react';

import * as S from './styles';
import {IEventCardProps} from '@/types';

const EventCard: React.FC<IEventCardProps> = ({
  onClick,
  title,
  subtitle,
  date,
  imageCard,
  cardHorizontal,
}) => {
  return (
    <>
      {cardHorizontal ? (
        <S.Content testID="ContentHorizontal" onPress={onClick}>
          <S.ContentImage imageStyle={{borderRadius: 10}} source={imageCard}>
            <S.Box>
              <S.Badge>
                <S.TextBadge>{date}</S.TextBadge>
              </S.Badge>
            </S.Box>
            <S.BoxText
              colors={['#1E20234D', '#191919CC', '#030303']}
              locations={[0, 0.3, 1]}>
              <S.InfoText>{title}</S.InfoText>
              <S.InfoTextSub>{subtitle}</S.InfoTextSub>
            </S.BoxText>
          </S.ContentImage>
        </S.Content>
      ) : (
        <S.ContentCardList testID="ContentVertical" onPress={onClick}>
          <S.CardVertical>
            <S.CardImg source={imageCard} />
            <S.InfoBoxText>
              <S.InfoText>{title}</S.InfoText>
              <S.InfoTextSub>{subtitle}</S.InfoTextSub>
            </S.InfoBoxText>
          </S.CardVertical>
        </S.ContentCardList>
      )}
    </>
  );
};

export default EventCard;
