import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0, backgroundColor: 'black' }} >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}