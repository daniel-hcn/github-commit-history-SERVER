import axios, { AxiosPromise } from 'axios';

interface Parameters {
  [key: string]: number | string;
}

export class Request {
  private stringifyQueryParams(queryParams: Parameters): string {
    if (!queryParams) return '';
    const params = Object.entries(queryParams).map(
      ([key, value]) => `${key}=${value}`,
    );
    return params.join('&');
  }

  public async get(
    url: string,
    queryParams?: Parameters,
  ): Promise<AxiosPromise> {
    return await axios({
      method: 'GET',
      url: url,
      params: queryParams,
      paramsSerializer: (params: Parameters) => {
        return this.stringifyQueryParams(params);
      },
    });
  }
}