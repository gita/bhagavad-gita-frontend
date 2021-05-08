import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import type { AppProps } from 'next/app';

const clientEnv = getRelayClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getRelayClientEnvironment()!,
});

export default function App({ Component, pageProps }: AppProps) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv!;
  return (
    <RelayEnvironmentProvider environment={env}>
      <Component {...pageProps} {...relayProps} />
    </RelayEnvironmentProvider>
  );
}
