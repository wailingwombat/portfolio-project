import ThemeClientProvider from '@/components/providers/ThemeClientProvider';
import ClientLayout from './ClientLayout';
import '@/styles/globals.css';

export const metadata = {
  title: 'Hanh Nguyen Portfolio',
  description: 'UX Designer at IBM based in NYC',
  metadataBase: new URL('https://hanhnguyen.design'),
  openGraph: {
    title: 'Hanh Nguyen Portfolio',
    description: 'UX Designer at IBM based in NYC',
    url: 'https://hanhnguyen.design',
    siteName: 'Hanh Nguyen Portfolio',
    images: [
      {
        url: 'https://www.annanguyen.design/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hanh Nguyen - UX Designer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanh Nguyen Portfolio',
    description: 'UX Designer at IBM based in NYC',
    images: ['https://www.annanguyen.design/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <ThemeClientProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeClientProvider>
      </body>
    </html>
  );
} 