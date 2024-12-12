import React from 'react';
import {Image} from 'react-native';
import * as S from './styles';

interface TicketProps {
  logo: string; // URL ou caminho da imagem do logotipo
  company: string;
  value: string;
  couponText: string;
  validity: string;
  redirect: () => void;
}

const Ticket: React.FC<TicketProps> = ({
  logo,
  company,
  value,
  couponText,
  validity,
  redirect,
}) => {
  return (
    <S.Container onPress={redirect}>
      <S.Middle>
        <S.CompanyName>{company}</S.CompanyName>
        <S.ValueCupon>
          <S.Value>{value}</S.Value>
          <S.CouponText>{couponText}</S.CouponText>
        </S.ValueCupon>
        <S.Validity>{validity}</S.Validity>
      </S.Middle>
      <S.ContentView>
        <S.DividerH />
        <S.LeftSide>
          <S.ImageCard source={logo} resizeMode="contain" />
        </S.LeftSide>
      </S.ContentView>
    </S.Container>
  );
};

export default Ticket;
