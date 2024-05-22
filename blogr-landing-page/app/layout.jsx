import '@globalCss/global.css';

export default function RootLayout({children}) {
  return (
    <html lang="pt-BR">
      <title>Blogr Landing Page</title>
      <body>{children}</body>
    </html>
  );
}