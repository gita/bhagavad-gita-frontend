import * as React from 'react';
import { useRouter } from 'next/router';
import { Suspenseful } from '@/components/Suspenseful';
import { ChapterById } from '@/features/chapters/ChapterById';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { RelayProps, withRelay } from 'relay-nextjs';
import { Slug_GitaChapterQuery } from '@/__generated__/Slug_GitaChapterQuery.graphql';
import { Layout } from '@/components/Layout';

export interface IChapterPageProps {}

const ChapterQuery = graphql`
  query Slug_GitaChapterQuery($id: ID!) {
    GitaChapter(id: $id) {
      _id
      ...ChapterById_ChapterDataFragment
    }
  }
`;

function HandleData({ preloadedQuery }: RelayProps<{}, Slug_GitaChapterQuery>) {
  const query = usePreloadedQuery<Slug_GitaChapterQuery>(
    ChapterQuery,
    preloadedQuery
  );
  const router = useRouter();
  const { id, slug } = router.query;
  const stringId = Array.isArray(id) ? id[0] : id;
  if (stringId) {
    return <ChapterById query={query} />;
  }
  return null;
}

function ChapterPage(props: RelayProps<{}, Slug_GitaChapterQuery>) {
  return (
    <Layout>
      <Suspenseful>
        <HandleData {...props} />
      </Suspenseful>
    </Layout>
  );
}

export default withRelay(ChapterPage, ChapterQuery, {
  createClientEnvironment: () => getRelayClientEnvironment()!,
  createServerEnvironment: async () => {
    const { getRelayServerEnvironment } = await import(
      '@/config/relay/server/getRelayServerEnvironment'
    );

    return getRelayServerEnvironment();
  },
});
