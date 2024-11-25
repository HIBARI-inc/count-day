import './globals.css';

export const metadata = {
  title: 'カウントデイ',
  description: 'シンプル日常カウントアプリ「カウントデイ」',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/nextjs/manifest.json" /> {/* basePathを考慮したパス */}
        {/* アイコンのリンクは削除 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/nextjs/sw.js');
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
