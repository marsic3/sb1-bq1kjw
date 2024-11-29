import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
    </div>
  );
}