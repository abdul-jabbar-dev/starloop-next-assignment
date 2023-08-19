import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const layout = Component.getLayout || (page => page)
  return layout(<Component {...pageProps} />)
}
