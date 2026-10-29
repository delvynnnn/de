'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <button className="theme-toggle" aria-label="Ganti tema" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>;
}
