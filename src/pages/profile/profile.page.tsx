import React from 'react';
import {Avatar, CustomButton, Header, Maps, TextIntro} from '@/components';
import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '@/styles';

import * as S from './styles';

const profile: React.FC = () => {
  return (
    <S.Container>
      <Header gobackIcon title=" Operador" />
      <S.ContentAvatar>
        <Avatar name="Ítalo" lastName="Guglielmini" />
      </S.ContentAvatar>
      <S.ContentStats>
        <S.StatsDiv>
          <S.StatsTitle>10</S.StatsTitle>
          <S.StatsText>Operações</S.StatsText>
        </S.StatsDiv>
        <S.StatsDiv>
          <S.StatsTitle>3</S.StatsTitle>
          <S.StatsText>Jogos/Peladas</S.StatsText>
        </S.StatsDiv>
        <S.StatsDiv>
          <S.StatsTitle>1</S.StatsTitle>
          <S.StatsText>Advertências</S.StatsText>
        </S.StatsDiv>
      </S.ContentStats>

      <S.BoxV>
        <TextIntro title="Meus dados" />
        <S.ContainerInfo>
          <S.Div>
            <Icon size={24} name="idcard" color={theme.colors.common.WHITE} />
            <S.InfoText>OPERADOR - 01</S.InfoText>
          </S.Div>
          <S.Div>
            <Icon size={24} name="mail" color={theme.colors.common.WHITE} />
            <S.InfoText>italo.guglielmini@gmail.com</S.InfoText>
          </S.Div>
          <S.Div>
            <Icon size={24} name="phone" color={theme.colors.common.WHITE} />
            <S.InfoText>81 9 9960-4027</S.InfoText>
          </S.Div>
          <S.Div>
            <Icon size={24} name="calendar" color={theme.colors.common.WHITE} />
            <S.InfoText>23/12/1992</S.InfoText>
          </S.Div>
          <S.Div>
            <Icon size={24} name="API" color={theme.colors.common.WHITE} />
            <S.InfoText>v1.0.0</S.InfoText>
          </S.Div>
        </S.ContainerInfo>
      </S.BoxV>
      <S.ContainerInfo>
        <CustomButton onPress={() => {}} size="lg" title="Logout" />
      </S.ContainerInfo>
    </S.Container>
  );
};

export default profile;
