import { store } from '@/state/store'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  const layout = Component.getLayout || (page => page)
  return <SessionProvider session={Component.session}>
    <Provider store={store}>
      {layout(<Component {...pageProps} />)}
    </Provider>
  </SessionProvider>
}
