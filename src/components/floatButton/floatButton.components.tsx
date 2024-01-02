import React, {useState} from 'react';

import * as S from './styles';
import {ActivityIndicator} from 'react-native';
import {IFloatButtonProps} from '@/types';

const FloatButton: React.FC<IFloatButtonProps> = ({
  hasParticipant,
  titleButton,
  redirect,
  loading: initialLoading,
  date,
  hour,
}) => {
  const [isLoading, setLoading] = useState(initialLoading);
  const [buttonText, setButtonText] = useState(titleButton);

  const handlePress = async () => {
    setLoading(true);
    try {
      await redirect();
      setButtonText('Estou participando');
    } finally {
      setLoading(false);
    }
  };
  return (
    <S.Content>
      <S.Container
        colors={['#1E20234D', '#191919CC', '#030303']}
        locations={[0, 0.3, 1]}>
        <S.ButtonFloat onPress={handlePress}>
          {isLoading ? (
            <ActivityIndicator
              testID="ActivityIndicator"
              size="small"
              color="#FFFFFF"
            />
          ) : (
            <S.Title>{buttonText}</S.Title>
          )}
        </S.ButtonFloat>
        <S.ContentCalendar>
          <S.TitleCalendar>{date}</S.TitleCalendar>
          <S.SubTitleCalendar>{hour}</S.SubTitleCalendar>
        </S.ContentCalendar>
      </S.Container>
    </S.Content>
  );
};

export default FloatButton;
