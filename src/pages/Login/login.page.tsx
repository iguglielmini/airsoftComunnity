import React from 'react';

import * as S from './styles';
import {CustomButton, InputCustom} from '@/components';
import {useNavigation} from '@react-navigation/native';

const Login: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <S.ContentLogo>
        <S.TitleLogo>Airsoft</S.TitleLogo>
        <S.SubtitleLogo>CommunityBR</S.SubtitleLogo>
      </S.ContentLogo>
      <S.ContentForm>
        <InputCustom type="text" placeholder="Insira seu email..." />
        <InputCustom type="password" placeholder="Insira sua senha..." />
        <CustomButton onPress={() => {}} size="lg" title="ENTRAR" />
        <S.ContentOpt>
          <S.Redirect1 onPress={() => navigate('Register')}>
            <S.SubtitleLogo>Sou novo!</S.SubtitleLogo>
          </S.Redirect1>
          <S.Redirect1 onPress={() => {}}>
            <S.SubtitleLogo>Esqueceu a senha?</S.SubtitleLogo>
          </S.Redirect1>
        </S.ContentOpt>
      </S.ContentForm>
    </S.Container>
  );
};

export default Login;
