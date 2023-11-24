import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Titulo from './components/Home'
import ClienteProvider from './contexts/cliente'


export const metadata = {
  title: 'Blog do Angelo',
  description: 'Controle de videos do Angelo, youtube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="./angeloface.png" type="image/x-icon" />
      </head>
      <body>
        <ClienteProvider>
          <Titulo />
          {children}
        </ClienteProvider>
      </body>
    </html>
  )
}
