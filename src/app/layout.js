import Link from 'next/link';

export default function RootLayout({ children, params }) {
  const currentLocale = params?.locale || 'en';

  return (
    <html lang={currentLocale}>
      <head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav style={{ padding: '1rem' }}>
          <Link href="/" locale="en" style={{ marginRight: '1rem' }}>
            English
          </Link>
          <Link href="/" locale="fr">
            Français
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}