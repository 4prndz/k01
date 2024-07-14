'use client';

import { HiSun as SunIcon, HiMoon as MoonIcon } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  if (currentTheme === 'dark') {
    return <SunIcon size={32} onClick={() => setTheme('light')} />;
  }

  if (currentTheme === 'light') {
    return (
      <div>
        <MoonIcon size={32} onClick={() => setTheme('dark')} />
      </div>
    );
  }
}
