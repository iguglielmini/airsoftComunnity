import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Header} from '@/components';
import {EventCard} from './components';

import * as S from './styles';
import {FlatList, View} from 'react-native';
import {eventData} from '@/mocks/events.mock';
import {IEventCardProps} from '@/types';

const Event: React.FC = () => {
  const {navigate} = useNavigation();

  const renderItem = ({item}: {item: IEventCardProps}) => (
    <EventCard
      cardHorizontal
      date={item.date}
      onClick={() => navigate('EventDetails')}
      title={item.title}
      imageCard={item.imageCard}
      subtitle={item.subtitle}
    />
  );

  const listRenderItem = ({item}: {item: IEventCardProps}) => (
    <EventCard
      cardHorizontal={false}
      date={item.date}
      onClick={() => navigate('EventDetails')}
      title={item.title}
      imageCard={item.imageCard}
      subtitle={item.subtitle}
    />
  );

  return (
    <>
      <Header title="Eventos" />
      <S.Container>
        <S.SectionCard>
          <S.TextSection>Eventos proximos</S.TextSection>
          <View>
            <FlatList
              horizontal
              data={eventData}
              renderItem={renderItem}
              keyExtractor={item => item.title}
            />
          </View>
        </S.SectionCard>

        <S.SectionCard>
          <S.TextSection>Eventos do Ano</S.TextSection>
          <FlatList
            data={eventData}
            renderItem={listRenderItem}
            keyExtractor={item => item.title}
          />
        </S.SectionCard>
      </S.Container>
    </>
  );
};

export default Event;
