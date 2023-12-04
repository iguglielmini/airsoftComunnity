import React from 'react';
import {View} from 'react-native';
import {Header, SectionImage, CardUser} from '@/components';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

const EventDetails: React.FC = () => {
  return (
    <S.Container>
      <Header title="Eventos Airsoft" gobackIcon />
      <S.Box>
        <SectionImage sizeHeight="sm" />
      </S.Box>
      <S.ContentInfo>
        <S.BoxRow>
          <View>
            <S.IntroText>Operação PB - 01</S.IntroText>
            <S.IntroSubText>João Pessoa - PB</S.IntroSubText>
          </View>
          <S.TextPrice>R$ 50,00</S.TextPrice>
        </S.BoxRow>
        <S.ContentGeneralUser>
          <S.ContentImageUsers>
            <CardUser />
          </S.ContentImageUsers>
          <S.IntroSubText>1 Participantes</S.IntroSubText>
        </S.ContentGeneralUser>
        <S.Divider />
        <S.ContentContact>
          <CardUser hasInfoUser name="Italo Giovanni" type="Organizador" />
          <S.InfoIcon>
            <S.ButtonIcon onPress={() => {}}>
              <Icon size={28} color="#FFF" name="mobile" />
            </S.ButtonIcon>
            <S.ButtonIcon onPress={() => {}}>
              <Icon size={28} color="#FFF" name="whatsapp" />
            </S.ButtonIcon>
          </S.InfoIcon>
        </S.ContentContact>
      </S.ContentInfo>
      <S.ContentDescribe>
        <S.IntroText>Descrição</S.IntroText>
        <S.IntroSubText>
          Airsoft é um jogo de estratégia e simulação militar. Equipados com
          réplicas de armas e munição de plástico, os jogadores realizam missões
          em terrenos variados, utilizando táticas de combate e trabalho em
          equipe. O objetivo é cumprir objetivos específicos, como capturar a
          bandeira ou eliminar a equipe adversária, promovendo esporte e
          camaradagem.
        </S.IntroSubText>
      </S.ContentDescribe>
    </S.Container>
  );
};

export default EventDetails;
