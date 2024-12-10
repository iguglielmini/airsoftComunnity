import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CheckboxProps} from '@/types';
import * as S from './styles';

const CheckboxCustom: React.FC<CheckboxProps> = ({label, onValueChange}) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    onValueChange(newValue);
  };

  return (
    <S.Container>
      <TouchableOpacity
        onPress={toggleCheckbox}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <S.Box>
          {checked && <Icon name="check" size={18} color="#23392e" />}
        </S.Box>
        <S.Label>{label}</S.Label>
      </TouchableOpacity>
    </S.Container>
  );
};

export default CheckboxCustom;
