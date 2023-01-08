import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '100'
})


export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={roboto.className}>
    <ChakraBaseProvider>
    <Component {...pageProps} />
  </ChakraBaseProvider>
  </div>
    )
}
