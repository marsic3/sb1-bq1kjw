import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  details?: string;
}

export function ErrorMessage({ message, details }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <p className="text-red-500 text-center font-medium">{message}</p>
      {details && (
        <p className="text-sm text-red-400 mt-2">{details}</p>
      )}
      <div className="mt-4 flex items-center gap-2 text-sm text-red-400">
        <RefreshCw className="w-4 h-4" />
        <span>Please refresh the page if the problem persists</span>
      </div>
    </div>
  );
}