import React from 'react';

import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';

interface ICategoryForumProps {
  title: string;
  icon: string;
  onPress?: () => void;
}

const CategoryForum: React.FC<ICategoryForumProps> = ({
  title,
  icon,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <S.SectionCard>
      <S.CategoryButton onPress={onPress}>
        <S.BoxButton>
          <Icon name={icon} size={30} color={theme.colors.primary.MAIN} />
          <S.TextButton>{title}</S.TextButton>
        </S.BoxButton>
      </S.CategoryButton>
    </S.SectionCard>
  );
};

export default CategoryForum;
