import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Title } from '../../atoms/Title';
import { FormTemplateWithTabs } from '../../templates/FormTemplate/FormTemplateWithTabs';
import {
  getFavBooksAction,
  getBooks,
  setSelPageNo,
  delFromFav,
} from '../../../core/slices/FavBooksSlice';
import { BookCard } from '../../molecules/BookCard/BookCard';
import { ButtonFav } from '../../atoms/ButtonFav';

import { Paginator } from '../../molecules/Paginator/Paginator';

export const FavBooksPage = () => {
  const booksStore = useSelector(getBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    const favList = booksStore?.favList;
    const selPageNo = booksStore?.selPageNo;
    dispatch(getFavBooksAction({ selPageNo, favList }));
  }, [dispatch, booksStore?.favList, booksStore?.selPageNo]);

  return (
    <FormTemplateWithTabs activeTabUrl="/my">
      <Title text="FAVORITES" />
      <PostsSt>
        <MainListSt>
          {booksStore?.books?.map((book) => (
            <CardSt key={book.isbn13}>
              <BookCardSt book={book} />
              <BtnFavSt
                isFav={book.isFav}
                disabled={false}
                onClick={() => {
                  if (book.isFav) {
                    dispatch(delFromFav(book.isbn13));
                  }
                }}></BtnFavSt>
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
  display: grid;
  grid-template-columns: 389px 1fr;
`;

const BtnFavSt = styled(ButtonFav)`
  grid-area: 1 / 1 / 2 / 2;
`;

const BookCardSt = styled(BookCard)`
  grid-area: 1 / 1 / 2 / 2;
`;
