import * as React from 'react';
import { useRouter } from 'next/router';
import { Suspenseful } from '@/components/Suspenseful';
import { VerseById } from '@/features/verses/VerseById';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { RelayProps, withRelay } from 'relay-nextjs';
import { Verse_Order_GitaVerseQuery } from '@/__generated__/Verse_Order_GitaVerseQuery.graphql';
import { Layout } from '@/components/Layout';

export interface IChapterPageProps {}

const VerseQuery = graphql`
  query Verse_Order_GitaVerseQuery($id: ID!) {
    GitaVerse(id: $id) {
      _id
      ...VerseById_VerseDataFragment
    }
  }
`;

function HandleData({
  preloadedQuery,
}: RelayProps<{}, Verse_Order_GitaVerseQuery>) {
  const query = usePreloadedQuery<Verse_Order_GitaVerseQuery>(
    VerseQuery,
    preloadedQuery
  );
  const router = useRouter();
  const { id, slug } = router.query;
  const stringId = Array.isArray(id) ? id[0] : id;
  if (stringId) {
    return <VerseById query={query} />;
  }
  return null;
}

function VersePage(props: RelayProps<{}, Verse_Order_GitaVerseQuery>) {
  return (
    <Layout>
      <Suspenseful>
        <HandleData {...props} />
      </Suspenseful>
    </Layout>
  );
}

export default withRelay(VersePage, VerseQuery, {
  createClientEnvironment: () => getRelayClientEnvironment()!,
  createServerEnvironment: async () => {
    const { getRelayServerEnvironment } = await import(
      '@/config/relay/server/getRelayServerEnvironment'
    );

    return getRelayServerEnvironment();
  },
});
