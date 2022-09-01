import { BaseService } from './BaseService';

class BooksAPIService extends BaseService {
  public async getNewBooks() {
    const res = await this.get('new');
    return res;
  }

  public async getSearchBooks(searchText: string, selPageNo: number) {
    const res = await this.get(`/search/${searchText}/${selPageNo}`);
    return res;
  }

  public async getBook(isbn13: string) {
    return this.get(`books/${isbn13}`);
  }
}

export const BooksService = new BooksAPIService();
