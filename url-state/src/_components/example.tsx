'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Shirt } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const sizes = [
  {
    label: 'Extra Small',
    value: '24px',
  },
  {
    label: 'Small',
    value: '52px',
  },
  {
    label: 'Medium',
    value: '84px',
  },
  {
    label: 'Large',
    value: '120px',
  },
  {
    label: 'Extra Large',
    value: '200px',
  },
];

const colors = [
  'teal',
  'magenta',
  'olive',
  'lavender',
  'maroon',
  'turquoise',
  'coral',
  'indigo',
  'salmon',
  'violet',
];

export function Example() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const size = searchParams.get('size') ?? 'Small';
  const color = searchParams.get('color') ?? 'black';

  const handleUpdate = (qName: string) => (qValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(qName, qValue);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div className="w-full h-[300px] flex flex-col gap-4 justify-center items-center">
        <Shirt
          size={sizes.find((i) => i.label === size)?.value}
          fill={color}
          strokeWidth={1}
        />
        <ul>
          <li>Color: {color}</li>
          <li>Size: {size}</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-2 font-bold">Controls</h2>
        <div className="flex gap-4">
          <DropDown
            label="Size"
            list={sizes.map(({ label }) => label)}
            onUpdate={handleUpdate('size')}
          />
          <DropDown
            label="Color"
            list={colors}
            onUpdate={handleUpdate('color')}
          />
        </div>
      </div>
    </div>
  );
}

const DropDown = ({
  label,
  list,
  onUpdate,
}: {
  label: string;
  list: string[];
  onUpdate: (value: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="cursor-pointer">{label}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {list.map((item) => (
        <DropdownMenuItem key={item} onClick={() => onUpdate(item)}>
          {item}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
