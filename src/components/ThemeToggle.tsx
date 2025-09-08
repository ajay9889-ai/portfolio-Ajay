import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="premium"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="w-12 h-12 rounded-full shadow-glow hover:shadow-elevated transition-all duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 text-neon transition-transform duration-300 hover:rotate-180" />
        ) : (
          <Moon className="h-5 w-5 text-neon transition-transform duration-300 hover:-rotate-12" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;