import * as React from 'react';
import { useRouter } from 'next/router';
import { Suspenseful } from '@/components/Suspenseful';
import { VerseById } from '@/features/verses/VerseById';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { RelayProps, withRelay } from 'relay-nextjs';
import { VerseNumber_GitaVerseQuery } from '@/__generated__/VerseNumber_GitaVerseQuery.graphql';
import { Layout } from '@/components/Layout';

export interface IChapterPageProps {}

const VerseQuery = graphql`
  query VerseNumber_GitaVerseQuery($verseNumber: Int) {
    verses(verseNumber: $verseNumber) {
      id
      ...VerseById_VerseDataFragment
    }
  }
`;

function HandleData({
  preloadedQuery,
}: RelayProps<{}, VerseNumber_GitaVerseQuery>) {
  const { verses } = usePreloadedQuery<VerseNumber_GitaVerseQuery>(
    VerseQuery,
    preloadedQuery
  );
  if (verses && verses[0]) {
    return <VerseById verse={verses[0]} />;
  }
  return null;
}

function VersePage(props: RelayProps<{}, VerseNumber_GitaVerseQuery>) {
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
  variablesFromContext: (context) => {
    const { verseNumber } = context.query;
    console.log(verseNumber);
    return {
      verseNumber:
        typeof verseNumber === 'string' ? parseInt(verseNumber) : verseNumber,
    };
  },
});
