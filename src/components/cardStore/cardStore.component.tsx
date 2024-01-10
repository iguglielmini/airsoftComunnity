import React from 'react';
import {Linking} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';
import maskPhone from '@/utils/maskPhone';
import {ICardStore} from '@/types';

const CardStore: React.FC<ICardStore> = ({
  wpp,
  image,
  titleEvent,
  endereco,
  telefone,
  detailsPress,
  mapsOpen,
}) => {
  const makePhoneCall = (phoneNumber: string) => {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`).catch(err =>
        console.error('Erro ao abrir o discador', err),
      );
    }
  };

  const openWhatsApp = (number: string) => {
    let phoneNumber = number.replace(/[^\d]/g, '');
    if (phoneNumber) {
      if (phoneNumber.length === 10) {
        phoneNumber = '55' + phoneNumber;
      }

      const url = `whatsapp://send?phone=${phoneNumber}`;
      Linking.openURL(url).catch(err => console.error('Erro', err));
    }
  };

  return (
    <S.Content>
      <S.ImageCard source={image} />
      <S.Title>{titleEvent}</S.Title>
      <S.ButtonLink onPress={mapsOpen}>
        <Icon size={20} name="calendar" color="#FFF" />
        <S.InfoText>{endereco}</S.InfoText>
      </S.ButtonLink>
      <S.ButtonLink onPress={() => telefone && makePhoneCall(telefone)}>
        <Icon size={20} name="calendar" color="#FFF" />
        <S.InfoText>{maskPhone(telefone)}</S.InfoText>
      </S.ButtonLink>
      <S.ButtonLink onPress={() => wpp && openWhatsApp(wpp)}>
        <Icon size={20} name="calendar" color="#FFF" />
        <S.InfoText>{maskPhone(wpp)}</S.InfoText>
      </S.ButtonLink>
      <S.ButtonLink onPress={detailsPress}>
        <S.Link>Saiba mais</S.Link>
      </S.ButtonLink>
    </S.Content>
  );
};

export default CardStore;
