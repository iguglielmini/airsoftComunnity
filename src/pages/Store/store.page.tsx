import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Header} from '@/components';
import {StoreCard} from './components';

import * as S from './styles';
import {FlatList, View} from 'react-native';
import {storeData} from '@/mocks/store.mock';
import {IEventCardProps} from '@/types';

const Store: React.FC = () => {
  const {navigate} = useNavigation();

  const renderItem = ({item}: {item: IEventCardProps}) => (
    <StoreCard
      cardHorizontal
      date={item.date}
      onClick={() => navigate('StoreDetails' as never)}
      title={item.title}
      imageCard={item.imageCard}
      subtitle={item.subtitle}
    />
  );

  const listRenderItem = ({item}: {item: IEventCardProps}) => (
    <StoreCard
      cardHorizontal={false}
      date={item.date}
      onClick={() => navigate('StoreDetails' as never)}
      title={item.title}
      imageCard={item.imageCard}
      subtitle={item.subtitle}
    />
  );

  return (
    <>
      <Header title="Parceiros" gobackIcon />
      <S.Container>
        <S.SectionCard>
          <S.TextSection>Lojas proximas</S.TextSection>
          <View>
            <FlatList
              horizontal
              data={storeData}
              renderItem={renderItem}
              keyExtractor={item => item.title}
            />
          </View>
        </S.SectionCard>

        <S.SectionCard>
          <S.TextSection>Todas as lojas</S.TextSection>
          <FlatList
            data={storeData}
            renderItem={listRenderItem}
            keyExtractor={item => item.title}
          />
        </S.SectionCard>
      </S.Container>
    </>
  );
};

export default Store;
