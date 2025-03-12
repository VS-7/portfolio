"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const languages = [
  { code: 'pt-BR', name: 'Português' },
  { code: 'en', name: 'English' },
];

export default function LanguageSelector({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    router.push(`?lang=${lang}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <p className="text-zinc-400 text-sm">Select Language / Selecionar Idioma</p>
      <div className="flex gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              currentLang === lang.code
                ? 'bg-zinc-200 text-zinc-800'
                : 'bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 border border-zinc-600/50'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
} 