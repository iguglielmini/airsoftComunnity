import React from 'react';
import {CustomButton, InputCustom, DatePickerCustom} from '@/components';
import TeamLogo from '@/assets/images/team.png';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';

const Register: React.FC = () => {
  const {navigate} = useNavigation();

  const handleDateChange = (date: Date) => {
    console.log('Data selecionada:', date.toISOString());
  };

  return (
    <S.Container>
      <S.ContentLogo>
        <S.LogoTeam source={TeamLogo} />
      </S.ContentLogo>
      <S.ContentForm>
        <S.TitleLogo>Registro</S.TitleLogo>
        <S.SubtitleLogo>
          Insira todos os dados para registro do squad.
        </S.SubtitleLogo>
        <InputCustom type="text" placeholder="Insira seu Nome" />
        <InputCustom type="text" placeholder="Insira seu Sobrenome" />
        <InputCustom type="text" placeholder="Insira seu telefone" />
        <InputCustom type="text" placeholder="Insira seu email" />
        <S.DividerBox>
          <DatePickerCustom
            label="Insira a data de aniversário"
            onDateChange={handleDateChange}
          />
        </S.DividerBox>
        <InputCustom type="password" placeholder="Insira sua senha..." />
        <CustomButton onPress={() => {}} size="lg" title="Criar conta" />
        <S.Redirect1 onPress={() => navigate('Login' as never)}>
          <S.SubtitleLogo>Opa, ja tenho cadastro!</S.SubtitleLogo>
        </S.Redirect1>
      </S.ContentForm>
    </S.Container>
  );
};

export default Register;
