'use client';
import { columns } from '@/_components/columns';
import { CopyButton } from '@/_components/copy-button';
import { DataTable } from '@/_components/data-table';
import { TableControls } from '@/_components/table-controls';
import { useTableStore } from '@/lib/store';
import { Users } from '@/lib/types';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

export function UserDataTable({ data }: { data: Users[] }) {
  const { sorting, setSorting, columnFilters, setColumnFilters } =
    useTableStore((state) => state);

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
      <div className="flex justify-center py-4">
        <CopyButton />
      </div>
      <TableControls table={table} />
      <DataTable table={table} />
    </div>
  );
}
