import React from 'react';

import * as S from './styles';
import {ISectionImage} from '@/types';

const SectionImage: React.FC<ISectionImage> = ({
  title,
  subtitle,
  sizeHeight,
}) => {
  return (
    <S.Content
      sizeHeight={sizeHeight}
      source={require('@/assets/images/intro2.png')}>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.Box>
    </S.Content>
  );
};

export default SectionImage;
