import {theme} from '@/styles';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(View)`
  width: 100px;
  height: 210px;
  border-radius: 8px;
  background-color: ${theme.colors.background.BLACK_500};
`;

export const ImageCard = styled(Image)``;

export const Title = styled(Text)``;
