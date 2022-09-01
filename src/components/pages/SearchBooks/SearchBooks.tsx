import { ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Title } from '../../atoms/Title';
import { Input } from '../../atoms/Input';
import { ETypeInput } from '../../atoms/Input/Input';
import { FormTemplateWithTabs } from '../../templates/FormTemplate/FormTemplateWithTabs';
import {
  getSearchBooksAction,
  getBooks,
  getItemsCount,
  setSelPageNo,
  getSearchText,
  setSearchText,
  setFavBook,
} from '../../../core/slices/SearchBooksSlice';
import { getFavListBooks, addToFav, delFromFav } from '../../../core/slices/FavBooksSlice';
import { BookCard } from '../../molecules/BookCard/BookCard';
import { ButtonFav } from '../../atoms/ButtonFav';

import { Paginator } from '../../molecules/Paginator/Paginator';

export const SearchBooksPage = () => {
  const booksStore = useSelector(getBooks);
  const itemsCount = useSelector(getItemsCount);
  const searchText = useSelector(getSearchText);
  const favList = useSelector(getFavListBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    const selPageNo = booksStore?.selPageNo;
    dispatch(getSearchBooksAction({ searchText, selPageNo, favList }) as any);
  }, [dispatch, itemsCount, searchText, booksStore?.selPageNo, favList]);

  const onBlur = () => {};
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  const searchInput = {
    value: searchText,
    type: ETypeInput.text,
    error: '',
    labelText: '',
    placeholder: 'search text',
    disabled: false,
  };

  return (
    <FormTemplateWithTabs activeTabUrl="/searchbooks">
      <InputDivSt>
        <Input {...searchInput} onChange={(event) => onChange(event)} onBlur={onBlur} />
      </InputDivSt>
      <Title text={"'" + searchText + "'" + ' SEARCH RESULTS'} />
      <PostsSt>
        <MainListSt>
          {booksStore?.books?.map((book) => (
            <CardSt key={book.isbn13}>
              <BookCardSt book={book} />
              <BtnFavSt
                isFav={book.isFav}
                disabled={false}
                onClick={() => {
                  dispatch(setFavBook(book));
                  if (book.isFav) {
                    dispatch(delFromFav(book));
                  } else {
                    dispatch(addToFav(book));
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

const InputDivSt = styled.div`
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
