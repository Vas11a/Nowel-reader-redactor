import './globals.css'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Providers } from './store/provider'


export const metadata = {
  title: 'Novel redactor',
  description: 'Novel redactor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body>
      <Providers>
        <div className="wrapper">
          <Sidebar/>  
          {children}
          <Footer/>
        </div>
        </Providers>
      </body>
    </html>
  )
}
