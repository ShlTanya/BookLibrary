import axios from 'axios';

interface ICredentials {
  URL: string;
}

export const projectAxios = axios.create();

export class BaseService {
  protected _credentials?: ICredentials;

  public setCredentials(credentials: ICredentials): void {
    this._credentials = credentials;
  }

  protected getCurrentUrl(path: string): string {
    if (this.credentials) {
      return `${this.credentials.URL}/${path}`;
    }
    return `${path}`;
  }

  protected get credentials() {
    return this._credentials;
  }

  public async get(route: string) {
    const url: string = this.getCurrentUrl(route);
    return await projectAxios.get(url);
  }
}
