import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {CardGun, Header, TextIntro, BadgeCustom} from '@/components';

import * as S from './styles';

import {gunsMock} from '@/mocks/guns.mock';

const MaintenancePage: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <S.Container>
      <Header gobackIcon title="Manutenção" />
      <S.BoxScroll>
        {/* anuncios */}
        <TextIntro title="Meus Armamentos" />
        {/* FlatList para exibir os armamentos */}
        <S.Div>
          <FlatList
            data={gunsMock}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CardGun
                gunName={item.gunName}
                typeGun={item.typeGun}
                brandImage={item.brandImage}
                gunImage={item.gunImage}
                deleteButton={() => console.log(`Excluir: ${item.gunName}`)}
                detailsButton={() =>
                  console.log(`Detalhes de: ${item.gunName}`)
                }
              />
            )}
          />
        </S.Div>
        <TextIntro title="Serviços e solicitações" />
        <S.Div2>
          <BadgeCustom
            label="Reparo Geral"
            icon="tools"
            sizerIcon={60}
            redirect={() => navigate('Maintenance' as never)}
          />
          <BadgeCustom
            label="Limpeza"
            icon="pistol"
            sizerIcon={60}
            redirect={() => navigate('Maintenance' as never)}
          />
          <BadgeCustom
            label="Suporte Técnico"
            icon="bullet"
            sizerIcon={60}
            redirect={() => navigate('Maintenance' as never)}
          />
          <BadgeCustom
            label="Dicas"
            icon="bullet"
            sizerIcon={60}
            redirect={() => navigate('Maintenance' as never)}
          />
        </S.Div2>
      </S.BoxScroll>
    </S.Container>
  );
};

export default MaintenancePage;
