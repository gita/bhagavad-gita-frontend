import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { RelayEnvironment } from '@/config/relay/RelayEnvironment';
import { useDidMount, useKey, useMouse, useWillUnmount } from 'rooks';

export default function App({ Component, pageProps }) {
  useDidMount(() => {
    console.log('hello world');
  });

  const val = useMouse();

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}
