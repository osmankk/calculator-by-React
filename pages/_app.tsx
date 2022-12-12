import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { store } from '../stor'
import { Provider } from 'react-redux'



export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
  <Component {...pageProps}/>
  </Provider>
  )
}
