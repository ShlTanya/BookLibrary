import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/Books';

interface IItemInBasket {
  book: IBook;
  count: number;
  price: number;
  amount: number;
}

interface IBasketState {
  bookList: IItemInBasket[];
  allAmount: number;
}

const initialState: IBasketState = {
  bookList: [],
  allAmount: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const ind = state.bookList?.findIndex((item) => {
        return item.book.isbn13 == action.payload.isbn13;
      });
      if (ind < 0) {
        state.bookList?.push({
          book: action.payload,
          count: 1,
          price: action.payload.price.slice(1) as number,
          amount: (action.payload.price.slice(1) as number) * 1,
        });
        state.allAmount = state.bookList.reduce((sum, item) => {
          return sum + item.amount;
        }, 0);
        state.allAmount = (state.allAmount.toFixed(2) as unknown as number) * 1;
      }
    },
    delFromBasket: (state, action) => {
      const ind = state.bookList?.findIndex((item) => {
        return item.book.isbn13 == action.payload;
      });

      if (ind >= 0) {
        state.bookList.splice(ind, 1);
        state.allAmount = state.bookList.reduce((sum, item) => {
          return sum + item.amount;
        }, 0);
        state.allAmount = (state.allAmount.toFixed(2) as unknown as number) * 1;
      }
    },
    addCount: (state, action) => {
      const ind = state.bookList?.findIndex((item) => {
        return item.book.isbn13 == action.payload;
      });

      if (ind >= 0) {
        state.bookList[ind].count++;
        state.bookList[ind].amount =
          ((state.bookList[ind].count * state.bookList[ind].price).toFixed(
            2,
          ) as unknown as number) * 1;
      }
      state.allAmount = state.bookList.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
      state.allAmount = (state.allAmount.toFixed(2) as unknown as number) * 1;
    },
    decCount: (state, action) => {
      const ind = state.bookList?.findIndex((item) => {
        return item.book.isbn13 == action.payload;
      });
      if (ind >= 0) {
        if (state.bookList[ind].count > 0) state.bookList[ind].count--;
        else state.bookList[ind].count = 0;

        state.bookList[ind].amount =
          ((state.bookList[ind].count * state.bookList[ind].price).toFixed(
            2,
          ) as unknown as number) * 1;
      }
      state.allAmount = state.bookList.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
      state.allAmount = (state.allAmount.toFixed(2) as unknown as number) * 1;
    },
  },
});

export const { addToBasket, delFromBasket, addCount, decCount } = basketSlice.actions;

export const getBasket = (state: { basketSl: IBasketState }) => ({
  bookList: state.basketSl.bookList,
  allAmount: state.basketSl.allAmount,
});

export default basketSlice.reducer;
