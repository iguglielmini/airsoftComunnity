import {theme} from '@/styles';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  padding: 24px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 100px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.common.WHITE};
`;

export const ButtonFloat = styled(TouchableOpacity)`
  background-color: ${theme.colors.info.WARNING};
  padding: 16px;
  border-radius: 10px;
`;

export const Content = styled(View)`
  bottom: 0;
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const ContentCalendar = styled(View)`
  align-items: center;
  background-color: ${theme.colors.background.BLACK_500};
  padding: 10px;
  border-radius: 10px;
`;

export const TitleCalendar = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.common.WHITE};
  text-align: center;
`;

export const SubTitleCalendar = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.common.WHITE};
  text-align: center;
`;
