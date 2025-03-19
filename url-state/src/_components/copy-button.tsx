import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useClipboard } from '@mantine/hooks';
import { CheckCheck, Copy } from 'lucide-react';

export function CopyButton() {
  const clipboard = useClipboard();
  return (
    <TooltipProvider>
      <Tooltip open={clipboard.copied}>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => clipboard.copy(window.location.href)}
          >
            Copy link to clipboard to share {clipboard.copied ? <CheckCheck /> : <Copy />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copied</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
