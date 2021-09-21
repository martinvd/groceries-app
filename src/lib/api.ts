import useSWR from 'swr';
import { Grocery } from '../types';
import { fetcher } from './request';

export enum ApiRoutes {
  Groceries = '/api/groceries',
  Grocery = '/api/grocery',
}

export function useGroceries() {
  const { data: groceries, error } = useSWR<Grocery[], string>(
    ApiRoutes.Groceries,
    fetcher
  );

  return {
    groceries,
    error,
    isLoading: !groceries && !error,
  };
}

export function useGrocery(name: Grocery['name']) {
  const { data: grocery, error } = useSWR<Grocery, string>(
    `${ApiRoutes.Grocery}/${decodeURIComponent(name)}`,
    fetcher
  );

  return {
    grocery,
    error,
    isLoading: !grocery && !error,
  };
}
