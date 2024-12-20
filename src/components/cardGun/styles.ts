import {theme} from '@/styles';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 24px;
  max-width: 200px;
  max-height: 265px;
  background-color: ${theme.colors.background.BLACK_400};
  border-radius: 30px;

  justify-content: center;
`;

export const IntroText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.common.WHITE};
`;

export const SubText = styled(Text)`
  font-size: 12px;
  font-weight: 300;
  color: ${theme.colors.common.WHITE};
`;

export const DivDad = styled(View)`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
`;

export const DivButton = styled(View)`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DivTitle = styled(View)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const Gun = styled(Image)`
  width: 200px;
  height: 140px;
`;

export const DetailsButton = styled(TouchableOpacity)`
  padding-left: 16px;
`;

export const DeleteButton = styled(TouchableOpacity)`
  padding: 16px;
  background-color: ${theme.colors.info.DANGER};
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
