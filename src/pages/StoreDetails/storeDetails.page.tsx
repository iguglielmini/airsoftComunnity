import React from 'react';
import {View} from 'react-native';
import {
  Header,
  SectionImage,
  CardUser,
  FloatButton,
  TextIntro,
  Maps,
} from '@/components';

import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

const StoreDetails: React.FC = () => {
  return (
    <>
      <Header title="Loja de Airsoft" gobackIcon />
      <S.Container contentContainerStyle={{paddingBottom: 100}}>
        <S.Box>
          <SectionImage sizeHeight="xxs" />
        </S.Box>
        <S.ContentInfo>
          <S.BoxRow>
            <View>
              <S.IntroText>Arena Firezone</S.IntroText>
              <S.IntroSubText>
                Rua Helena Meira lima, 78, João Pessoa - PB
              </S.IntroSubText>
            </View>
          </S.BoxRow>
          <S.Divider />
          <S.ContentContact>
            <CardUser hasInfoUser name="Arena Firezone" type="Organizador" />
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
          <TextIntro title="Quem somos" />
          <S.TextDescribe>
            Airsoft é um jogo de estratégia e simulação militar. Equipados com
            réplicas de armas e munição de plástico, os jogadores realizam
            missões em terrenos variados, utilizando táticas de combate e
            trabalho em equipe. O objetivo é cumprir objetivos específicos.
          </S.TextDescribe>
        </S.ContentDescribe>
        <S.ContentDescribe>
          <TextIntro title="Localização" />
          <View style={{padding: 16}}>
            <Maps />
          </View>
        </S.ContentDescribe>
      </S.Container>
    </>
  );
};

export default StoreDetails;
