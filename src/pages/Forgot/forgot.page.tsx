import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {InputCustom, CustomButton} from '@/components';
import TeamLogo from '@/assets/images/team.png';

import * as S from './styles';

const Forgot: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <S.ContentLogo>
        <S.LogoTeam source={TeamLogo} />
      </S.ContentLogo>
      <S.ContentForm>
        <S.TitleLogo>Esqueceu a senha?</S.TitleLogo>
        <S.SubtitleLogo>
          Não se preocupe! Insira o email associado a sua conta.
        </S.SubtitleLogo>
        <InputCustom type="text" placeholder="Insira seu email..." />
        <CustomButton onPress={() => {}} size="lg" title="RESGATAR SENHA" />
        <S.ContentOpt>
          <S.Redirect1 onPress={() => navigate('Login' as never)}>
            <S.SubtitleLogo>Lembrei minha senha!</S.SubtitleLogo>
          </S.Redirect1>
        </S.ContentOpt>
      </S.ContentForm>
    </S.Container>
  );
};

export default Forgot;
