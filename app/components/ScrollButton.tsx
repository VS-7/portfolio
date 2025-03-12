'use client';

interface ScrollButtonProps {
  text: string;
}

export default function ScrollButton({ text }: ScrollButtonProps) {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={handleScroll}
      className="px-6 py-3 text-zinc-400 hover:text-zinc-100 bg-zinc-800/50 rounded-full border border-zinc-600/50 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
    >
      {text}
    </button>
  );
} 