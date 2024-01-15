import React from 'react';

import {CategoryForum, Header} from '@/components';

import * as S from './styles';
import {CategoryForumMock} from '@/mocks/categoryForum.mock';

const Forum: React.FC = () => {
  const handleCategoryPress = (categoryId: number) => {
    console.log(`Categoria ${categoryId} pressionada`);
  };
  return (
    <>
      <Header title="Fóruns" />
      <S.Container>
        <S.ContentCategory horizontal showsHorizontalScrollIndicator={false}>
          {CategoryForumMock.map(category => (
            <CategoryForum
              key={category.id}
              title={category.title}
              icon={category.icon}
              onPress={() => handleCategoryPress(category.id)}
            />
          ))}
        </S.ContentCategory>
      </S.Container>
    </>
  );
};

export default Forum;
