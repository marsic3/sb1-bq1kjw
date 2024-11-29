import { useEffect } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { RiveControls } from './RiveControls';
import { useRiveAnimation } from '../hooks/useRiveAnimation';

const RIVE_FILE_URL = 'https://public.rive.app/hosted/3660-7647-lego-minifig-demo.riv';

export function RiveAnimation() {
  const {
    RiveComponent,
    isLoading,
    error,
    lookInput,
    waveInput,
    retryCount,
  } = useRiveAnimation(RIVE_FILE_URL);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lookInput) {
        const x = (e.clientX / window.innerWidth) * 100;
        lookInput.value = x;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [lookInput]);

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        details={`Attempt ${retryCount} of 3`} 
      />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <RiveComponent className="w-full h-full" />
      </div>
      <RiveControls 
        onWave={() => waveInput?.fire()} 
        disabled={!waveInput}
      />
    </div>
  );
}