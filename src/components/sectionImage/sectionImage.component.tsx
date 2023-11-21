import React from 'react';

import * as S from './styles';

interface ISectionImage {
  title?: string;
  subtitle?: string;
}

const SectionImage: React.FC<ISectionImage> = ({title, subtitle}) => {
  return (
    <S.Content source={require('@/assets/images/intro2.png')}>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.Box>
    </S.Content>
  );
};

export default SectionImage;
