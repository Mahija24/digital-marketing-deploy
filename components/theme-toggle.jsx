"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-primary/10 dark:bg-white/10 hover:bg-primary/20 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-primary dark:text-white" />
      ) : (
        <Sun className="h-5 w-5 text-primary dark:text-white" />
      )}
    </button>
  )
}

