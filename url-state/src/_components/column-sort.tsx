import { Button } from '@/components/ui/button';
import { Users } from '@/lib/types';
import { Column } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const ColumnSort = ({
  column,
  className,
}: {
  column: Column<Users, unknown>;
  className?: string;
}) => (
  <Button
    variant="ghost"
    className={className ? className : 'cursor-pointer justify-start'}
    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  >
    <ArrowUpDown className="ml-2 h-4 w-4" />
  </Button>
);
