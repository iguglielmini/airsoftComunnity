import {theme} from '@/styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(TouchableOpacity)`
  margin-top: 16px;
  margin-right: 8px;
`;

export const Box = styled(View)`
  width: 100%;
  align-items: flex-end;
  padding-right: 16px;
`;

export const Badge = styled(View)`
  width: 40px;
  height: 40px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  background-color: ${theme.colors.primary.MAIN};
`;

export const ContentImage = styled(ImageBackground)`
  width: 300px;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextBadge = styled(Text)`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  color: #000;
`;

export const BoxText = styled(LinearGradient)`
  padding: 16px;
  border-radius: 10px;
  height: 100px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const InfoText = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.common.WHITE};
  text-transform: uppercase;
  font-weight: 800;
`;

export const InfoTextSub = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.common.WHITE};
  text-transform: uppercase;
  font-weight: 400;
`;

export const ContentCardList = styled(TouchableOpacity)`
  margin-top: 16px;
`;

export const CardVertical = styled(View)`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  flex-direction: row;
  background-color: ${theme.colors.background.BLACK_500};
`;

export const CardImg = styled(Image)`
  width: 80px;
  height: 80px;
  background-color: red;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const InfoBoxText = styled(View)`
  padding: 16px;
`;
