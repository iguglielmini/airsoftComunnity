import {theme} from '@/styles';
import {ImageBackground, Text, View} from 'react-native';
import styled from 'styled-components/native';

interface ISectionImageProps {
  sizeHeight: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
}

export const Content = styled(ImageBackground)<ISectionImageProps>`
  width: 100%;
  justify-content: flex-end;
  height: ${({sizeHeight}) => {
    switch (sizeHeight) {
      case 'lg':
        return '550px';
      case 'md':
        return '450px';
      case 'sm':
        return '350px';
      case 'xs':
        return '250px';
      case 'xxs':
        return '150px';
      default:
        return '150px';
    }
  }};
`;

export const Box = styled(View)`
  padding: 16px;
`;

export const Title = styled(Text)`
  color: ${theme.colors.primary.MAIN};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubTitle = styled(Text)`
  color: ${theme.colors.common.WHITE};
  font-size: 16px;
`;
