interface RiveControlsProps {
  onWave: () => void;
  disabled?: boolean;
}

export function RiveControls({ onWave, disabled }: RiveControlsProps) {
  return (
    <button
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-400 disabled:active:scale-100"
      onClick={onWave}
      disabled={disabled}
    >
      Wave!
    </button>
  );
}