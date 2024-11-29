import { useRive, useStateMachineInput, RiveState } from '@rive-app/react-canvas';
import { useEffect, useState, useCallback } from 'react';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

export function useRiveAnimation(riveFileUrl: string) {
  const [retryCount, setRetryCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback(() => {
    if (retryCount < MAX_RETRIES) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setError(null);
      }, RETRY_DELAY);
    } else {
      setError('Failed to load the animation after multiple attempts');
    }
  }, [retryCount]);

  const { rive, RiveComponent, isLoading } = useRive({
    src: riveFileUrl,
    stateMachines: 'State Machine 1',
    autoplay: true,
    onStateChange: (state: RiveState) => {
      if (state === RiveState.Failed) {
        handleError();
      }
    },
  });

  const lookInput = useStateMachineInput(rive, 'State Machine 1', 'Look');
  const waveInput = useStateMachineInput(rive, 'State Machine 1', 'Wave');

  return {
    rive,
    RiveComponent,
    isLoading,
    error,
    lookInput,
    waveInput,
    retryCount,
  };
}