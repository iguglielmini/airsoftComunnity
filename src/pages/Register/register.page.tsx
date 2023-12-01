import React from 'react';
import {View} from 'react-native';
import {CustomButton, InputCustom} from '@/components';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

const Register: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <S.ContentLogo>
        <S.TitleLogo>Airsoft</S.TitleLogo>
        <S.SubtitleLogo>CommunityBR</S.SubtitleLogo>
      </S.ContentLogo>
      <S.ContentForm>
        <InputCustom type="text" placeholder="Insira seu Nome..." />
        <InputCustom type="text" placeholder="Insira seu email..." />
        <InputCustom type="password" placeholder="Insira sua senha..." />
        <CustomButton onPress={() => {}} size="lg" title="Criar conta" />
        <S.ContentOpt>
          <S.Redirect1 onPress={() => navigate('Login')}>
            <S.SubtitleLogo>Opa, ja tenho cadastro!</S.SubtitleLogo>
          </S.Redirect1>
          <View />
        </S.ContentOpt>
      </S.ContentForm>
    </S.Container>
  );
};

export default Register;
