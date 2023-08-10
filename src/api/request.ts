const BASE_URL = 'https://jsonplaceholder.typicode.com/';

type Params = {
  url: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'UPDATE';
};

export const request = <T>({ url, method = 'GET' }: Params) => {
  return fetch(BASE_URL + url, {
    method,
  }).then((res) => res.json()) as Promise<T>;
};
