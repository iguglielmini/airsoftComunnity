import React from 'react';
import {Avatar, CustomButton, Header, TextIntro} from '@/components';
import Icon from 'react-native-vector-icons/AntDesign';
import {theme} from '@/styles';

import * as S from './styles';

const profile: React.FC = () => {
  return (
    <S.Container>
      <Header gobackIcon title="Central do Perfil" />
      <S.ContentAvatar>
        <Avatar name="Ítalo" lastName="Guglielmini" />
      </S.ContentAvatar>

      <TextIntro title="Minha Localização" />
      <S.ContainerInfo>
        <S.Map />
      </S.ContainerInfo>
      <S.BoxV>
        <TextIntro title="Meus dados" />
        <S.ContainerInfo>
          <S.Div>
            <Icon size={24} name="idcard" color={theme.colors.common.WHITE} />
            <S.InfoText>3251161as5</S.InfoText>
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
            <Icon size={24} name="phone" color={theme.colors.common.WHITE} />
            <S.InfoText>81 9 9960-4027</S.InfoText>
          </S.Div>
          <S.Div>
            <Icon size={24} name="API" color={theme.colors.common.WHITE} />
            <S.InfoText>v1.0.0</S.InfoText>
          </S.Div>
        </S.ContainerInfo>
        <S.ContainerInfo>
          <CustomButton onPress={() => {}} size="lg" title="Logout" />
        </S.ContainerInfo>
      </S.BoxV>
    </S.Container>
  );
};

export default profile;
