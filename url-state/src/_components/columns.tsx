'use client';
import { Users } from '@/lib/types';
import { Column, ColumnDef } from '@tanstack/react-table';
import { ColumnFilterButton, ColumnFilterInput } from './column-filter';
import { ColumnSort } from './column-sort';
import { useState } from 'react';

const TableHead = ({
  column,
  name,
}: {
  column: Column<Users, unknown>;
  name: string;
}) => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <div className="flex items-center">
        {name}
        <ColumnSort column={column} />
        <ColumnFilterButton
          column={column}
          handleOpen={() => setOpenFilter(!openFilter)}
        />
      </div>
      <div className="flex flex-col w-full">
        {openFilter && <ColumnFilterInput column={column} />}
      </div>
    </>
  );
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <TableHead name="ID" column={column} />,
  },
  {
    accessorKey: 'first_name',
    header: ({ column }) => <TableHead name="First name" column={column} />,
  },
  {
    accessorKey: 'last_name',
    header: ({ column }) => <TableHead name="Last name" column={column} />,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <TableHead name="Email" column={column} />,
  },
  {
    accessorKey: 'gender',
    header: ({ column }) => <TableHead name="Gender" column={column} />,
  },
];
