import '@/styles/globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'  // Make sure this path is correct

export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#202124';
      document.body.style.backgroundColor = '#202124';
    }
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}