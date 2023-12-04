import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {InputCustom, CustomButton} from '@/components';

import * as S from './styles';

const Forgot: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <S.ContentLogo>
        <S.TitleLogo>Airsoft</S.TitleLogo>
        <S.SubtitleLogo>CommunityBR</S.SubtitleLogo>
      </S.ContentLogo>
      <S.ContentForm>
        <InputCustom type="text" placeholder="Insira seu email..." />
        <CustomButton onPress={() => {}} size="lg" title="RESGATAR SENHA" />
        <S.ContentOpt>
          <S.Redirect1 onPress={() => navigate('Register')}>
            <S.SubtitleLogo>Sou novo!</S.SubtitleLogo>
          </S.Redirect1>
          <S.Redirect1 onPress={() => navigate('Login')}>
            <S.SubtitleLogo>Login?</S.SubtitleLogo>
          </S.Redirect1>
        </S.ContentOpt>
      </S.ContentForm>
    </S.Container>
  );
};

export default Forgot;
