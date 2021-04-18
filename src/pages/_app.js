import { RelayEnvironmentProvider } from 'react-relay/hooks';
import {RelayEnvironment} from '@/config/relay/RelayEnvironment'

export default function App({ Component, pageProps }) {

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Component {...pageProps} />
    </RelayEnvironmentProvider>
  )
}