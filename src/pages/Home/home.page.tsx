import React from 'react';
import {BadgeCustom, CardEvent, Header, TextIntro} from '@/components';
import * as S from './styles';
import ImgTest from '@/assets/images/intro2.png';
import ImgTest2 from '@/assets/images/introImage.png';
import {useNavigation} from '@react-navigation/native';
import TeamLogo from '@/assets/images/team.png';

const Home: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <Header />
      {/* user info */}
      <S.ContentUser>
        <S.ContentUserCard source={TeamLogo} resizeMode="cover" />
        <S.BoxStatusUserInfo>
          <S.ContentUserTitle>Bem vindo, Italo Guglielmini</S.ContentUserTitle>
          <S.StatusUserInfo>
            <S.ContentUserInfo>OP-01</S.ContentUserInfo>
            <S.ContentUserInfo>Administrador</S.ContentUserInfo>
          </S.StatusUserInfo>
        </S.BoxStatusUserInfo>
      </S.ContentUser>
      <S.BoxV>
        {/* accesso rapido */}
        <S.AccessFastBox>
          <BadgeCustom
            label="Manutenção"
            icon="magazine-pistol"
            sizerIcon={60}
            redirect={() => navigate('Maintenance' as never)}
          />
          <BadgeCustom
            label="Cupons"
            icon="ticket"
            sizerIcon={60}
            redirect={() => navigate('Coupon' as never)}
          />
          <BadgeCustom
            label="Parceiros"
            icon="store"
            sizerIcon={60}
            redirect={() => navigate('Store' as never)}
          />
        </S.AccessFastBox>
        <TextIntro hasList title="Informativos do Squad" />
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardEvent
            image={ImgTest}
            locationUF="PB"
            titleEvent="Arrecadação de Dinheiro para as camisas"
            calendario="26/11/23 - 12:00"
            detailsPress={() => navigate('EventDetails' as never)}
          />
        </S.BoxH>
        {/* anuncios */}
        <TextIntro
          hasList
          title="Operações e Jogos"
          redirect={() => navigate('Event' as never)}
        />
        <S.BoxH horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardEvent
            image={ImgTest2}
            locationUF="PB"
            titleEvent="Operação Lockdonw 4"
            calendario="26/11/23 - 12:00"
            detailsPress={() => navigate('EventDetails' as never)}
          />
        </S.BoxH>
      </S.BoxV>
    </S.Container>
  );
};

export default Home;
