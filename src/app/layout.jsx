import ThemeClientProvider from '@/components/providers/ThemeClientProvider';
import ClientLayout from './ClientLayout';
import '@/styles/globals.css';

export const metadata = {
  title: 'Hanh Nguyen Portfolio',
  description: 'UX Designer at IBM based in NYC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <ThemeClientProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeClientProvider>
      </body>
    </html>
  );
} 