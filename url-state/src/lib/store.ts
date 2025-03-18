import {
  ColumnFiltersState,
  OnChangeFn,
  SortingState,
} from '@tanstack/react-table';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { hashStorage } from './store-utils';

interface TableStore {
  columnFilters: ColumnFiltersState;
  setColumnFilters: OnChangeFn<ColumnFiltersState>;
  sorting: SortingState;
  setSorting: OnChangeFn<SortingState>;
}

export const useTableStore = create(
  persist<TableStore>(
    (set) => ({
      columnFilters: [],
      setColumnFilters: (
        updaterOrValue:
          | ColumnFiltersState
          | ((old: ColumnFiltersState) => ColumnFiltersState)
      ) =>
        set((state) => ({
          columnFilters:
            typeof updaterOrValue === 'function'
              ? updaterOrValue(state.columnFilters)
              : updaterOrValue,
        })),
      sorting: [],
      setSorting: (
        updaterOrValue: SortingState | ((old: SortingState) => SortingState)
      ) =>
        set((state) => ({
          sorting:
            typeof updaterOrValue === 'function'
              ? updaterOrValue(state.sorting)
              : updaterOrValue,
        })),
    }),
    {
      name: 'table-store',
      storage: createJSONStorage(() => hashStorage),
    }
  )
);
