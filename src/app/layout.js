'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/utils'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '../components/Navbar'
import { ThemeProvider } from './themeContext'
import { Provider } from 'react-redux'
import { SpaceProvider } from './SpaceContext'
import Footer from '../components/Footer'
import store from '../components/redux/store'
// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={cn('min-h-screen font-sans antialiased', inter.className)}
        >
          <Navbar />
          <Provider store={store}>
            <SpaceProvider>{children}</SpaceProvider>
          </Provider>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
