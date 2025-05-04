'use client'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function ThemeClientProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}