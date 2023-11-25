
import ClienteProvider from './contexts/cliente'
import HomeCliente from './components/HomeCliente'
import './styles/HomeCliente.css';
import './styles/body.css';


export const metadata = {
  title: 'Blog do Angelo',
  description: 'Controle de videos do Angelo, youtube',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" >
      <head >
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="shortcut icon" href="../angeloface.png" type="image/x-icon" />
      </head>
      <body  >

        <ClienteProvider>
          <HomeCliente />
          {children}
        </ClienteProvider>
      </body>
    </html>
  )
}
