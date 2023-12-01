import {theme} from '@/styles';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const CustomInput = styled(TextInput)`
  height: 50px;
  width: 100%;
  border: 1px;
  border-color: ${theme.colors.primary.MAIN};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  color: white;
`;
