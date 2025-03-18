import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users } from '@/lib/types';
import { Column } from '@tanstack/react-table';
import { Filter } from 'lucide-react';

export const ColumnFilterButton = ({
  column,
  handleOpen,
}: {
  column: Column<Users, unknown>;
  handleOpen: () => void;
}) => {
  const value = column.getFilterValue();
  return (
    <Button
      variant="ghost"
      className="cursor-pointer justify-start"
      onClick={() => handleOpen()}
    >
      <span className="relative">
        <Filter />
        {!!value && value !== '' && (
          <span className="absolute top-[-5px] right-[-7px] size-2 rounded-full bg-sky-500"></span>
        )}
      </span>
    </Button>
  );
};

export const ColumnFilterInput = ({
  column,
}: {
  column: Column<Users, unknown>;
}) => {
  return (
    <div className="flex w-full">
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ''}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="max-w-sm"
      />
    </div>
  );
};
