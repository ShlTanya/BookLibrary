import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Title } from '../../atoms/Title';
import { FormTemplateWithTabs } from '../../templates/FormTemplate/FormTemplateWithTabs';
import { getNewBooksAction, getBooks, setSelPageNo } from '../../../core/slices/NewBooksSlice';
import { BookCard } from '../../molecules/BookCard/BookCard';

import { Paginator } from '../../molecules/Paginator/Paginator';

export const NewBooksPage = () => {
  const booksStore = useSelector(getBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewBooksAction());
  }, [dispatch, booksStore?.selPageNo]);

  return (
    <FormTemplateWithTabs activeTabUrl="/newbooks">
      <Title text="NEW RELEASES BOOKS" />
      <PostsSt>
        <MainListSt>
          {booksStore?.books?.map((book) => (
            <CardSt key={book.isbn13}>
              <BookCard book={book} />
            </CardSt>
          ))}
        </MainListSt>
        <Paginator
          pageCount={booksStore.pageCount}
          selPageNo={booksStore.selPageNo}
          onPageClick={(newPageNo: number) => {
            dispatch(setSelPageNo(newPageNo));
          }}
          onPrevClick={() => {
            dispatch(setSelPageNo(booksStore.selPageNo - 1));
          }}
          onNextClick={() => {
            dispatch(setSelPageNo(booksStore.selPageNo + 1));
          }}
        />
      </PostsSt>
    </FormTemplateWithTabs>
  );
};

const PostsSt = styled.div`
  width: 100%;
`;

const MainListSt = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-content: start;
  flex-wrap: wrap;
  gap: 30px;
`;

const CardSt = styled.div`
  padding: 0 0 40px 0;
`;
