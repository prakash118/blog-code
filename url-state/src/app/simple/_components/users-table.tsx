'use client';

import { columns } from '@/_components/columns';
import { DataTable } from '@/_components/data-table';
import { TableControls } from '@/_components/table-controls';
import { useQueryString } from '@/lib/query-string-hook';
import { Users } from '@/lib/types';
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

export function UserDataTable({ data }: { data: Users[] }) {
  const [sorting, setSorting] = useQueryString<SortingState>('sorting');
  const [columnFilters, setColumnFilters] =
    useQueryString<ColumnFiltersState>('columnFilters');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      <TableControls table={table} />
      <DataTable table={table} />
    </div>
  );
}
