import { OnChangeFn } from '@tanstack/react-table';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

type SetValue<T> = (old: T) => T;

export const useQueryString = <T,>(qName: string): [T, OnChangeFn<T>] => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const qValue = searchParams.get(qName);

  const getValue: T = useMemo(
    () => (qValue ? JSON.parse(qValue) : []),
    [qValue]
  );

  const setValue = useCallback(
    (updaterOrValue: T | SetValue<T>) => {
      const value =
        typeof updaterOrValue === 'function'
          ? (updaterOrValue as SetValue<T>)(getValue)
          : updaterOrValue;
      router.push(
        pathname + '?' + createQueryString(qName, JSON.stringify(value))
      );
    },
    [createQueryString, getValue, pathname, qName, router]
  );

  return [getValue, setValue];
};
