export interface IBookPdf {
  'Free eBook': string;
}

export interface IBook {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: IBookPdf[];
  isFav: boolean;
}

export interface IBooksInfo {
  error: string;
  total: number;
  page: number;
  books: IBook[];
}
