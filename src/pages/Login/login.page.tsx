import React, {useState} from 'react';

import * as S from './styles';
import {CustomButton, InputCustom, CheckboxCustom} from '@/components';
import {useNavigation} from '@react-navigation/native';
import TeamLogo from '@/assets/images/team.png';

const Login: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {navigate} = useNavigation();

  const handleCheckboxChange = (value: boolean) => {
    setRememberMe(value);
  };
  return (
    <S.Container>
      <S.ContentLogo>
        <S.LogoTeam source={TeamLogo} />
      </S.ContentLogo>
      <S.ContentForm>
        <S.TitleLogo>Área Restrita</S.TitleLogo>
        <InputCustom type="text" placeholder="Insira seu email..." />
        <InputCustom type="password" placeholder="Insira sua senha..." />
        <S.ContentOpt>
          <CheckboxCustom
            label="Lembre-me"
            onValueChange={handleCheckboxChange}
          />
          <S.Redirect1 onPress={() => navigate('Forgot' as never)}>
            <S.SubtitleLogo>Esqueceu a senha?</S.SubtitleLogo>
          </S.Redirect1>
        </S.ContentOpt>
        <CustomButton onPress={() => {}} size="lg" title="ENTRAR" />
        <S.RegisterBox>
          <S.RegisterText>Efetivou agorou no S.S?</S.RegisterText>
          <S.Redirect1 onPress={() => navigate('Register' as never)}>
            <S.SubtitleLogo>Registre-se</S.SubtitleLogo>
          </S.Redirect1>
        </S.RegisterBox>
      </S.ContentForm>
    </S.Container>
  );
};

export default Login;
