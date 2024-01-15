import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bai+Jamjuree:400,500,700&amp;display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Coda&amp;display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700&amp;display=swap"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
