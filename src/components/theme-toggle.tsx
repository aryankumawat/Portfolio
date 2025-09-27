"use client";

import { Palette, Sparkles, Zap, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themeIcons = {
  ultraviolet: Moon,
  'neon-cyan': Zap,
  'deep-space': Sun,
};

export function ThemeToggle() {
  const { theme, setTheme, availableThemes } = useTheme();
  const CurrentIcon = themeIcons[theme];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-bg-glass"
        >
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass border-border-primary">
        {Object.entries(availableThemes).map(([key, config]) => {
          const Icon = themeIcons[key as keyof typeof themeIcons];
          return (
            <DropdownMenuItem
              key={key}
              onClick={() => setTheme(key as any)}
              className={`flex items-center gap-2 ${
                theme === key ? 'bg-bg-glass' : ''
              }`}
            >
              <Icon className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="font-medium">{config.name}</span>
                <span className="text-xs text-text-muted">
                  {config.description}
                </span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
