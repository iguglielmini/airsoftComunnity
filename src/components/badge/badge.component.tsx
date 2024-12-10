import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '@/styles';
import * as S from './styles';

interface IBadgeProps {
  label?: string;
  icon: string;
  sizerIcon: number;
  redirect: () => void;
}

const BadgeCustom: React.FC<IBadgeProps> = ({
  label,
  icon,
  sizerIcon,
  redirect,
}) => {
  return (
    <S.Container>
      <S.Badge onPress={redirect}>
        <Icon size={sizerIcon} name={icon} color={theme.colors.common.WHITE} />
      </S.Badge>
      <S.TextBadge>{label}</S.TextBadge>
    </S.Container>
  );
};

export default BadgeCustom;
