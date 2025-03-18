import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Table } from '@tanstack/react-table';
import { RefreshCcw } from 'lucide-react';

export function TableControls<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className="mb-4">
      <Reset
        onColFilterReset={() => table.resetColumnFilters()}
        onColSorting={() => table.resetSorting()}
      />
    </div>
  );
}

function Reset({
  onColFilterReset,
  onColSorting,
}: {
  onColFilterReset: () => void;
  onColSorting: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto cursor-pointer">
          <RefreshCcw /> Reset
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onColFilterReset} className="cursor-pointer">
          Column filter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onColSorting} className="cursor-pointer">
          Column sorting
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
