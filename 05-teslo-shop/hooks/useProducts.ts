import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '@/interfaces';

export function useProducts(url: string, config: SWRConfiguration = {}) {
  const res = useSWR<IProduct[]>(`/api/${url}`, config);

  return {
    ...res,
    products: res.data ?? [],
  };
}
