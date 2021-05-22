import * as React from 'react';
import { useRouter } from 'next/router';
import { Suspenseful } from '@/components/Suspenseful';
import { ChapterById } from '@/features/chapters/ChapterById';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { RelayProps, withRelay } from 'relay-nextjs';
import { Chapter_Number_GitaChapterQuery } from '@/__generated__/Chapter_Number_GitaChapterQuery.graphql';
import { Layout } from '@/components/Layout';

export interface IChapterPageProps {}

const ChapterQuery = graphql`
  query Chapter_Number_GitaChapterQuery($chapter_number: ID!) {
    allGitaChapter(where: { chapter_number: { eq: $chapter_number } }) {
      _id
      ...ChapterById_ChapterDataFragment
    }
  }
`;

function HandleData({
  preloadedQuery,
}: RelayProps<{}, Chapter_Number_GitaChapterQuery>) {
  const query = usePreloadedQuery<Chapter_Number_GitaChapterQuery>(
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

function ChapterPage(props: RelayProps<{}, Chapter_Number_GitaChapterQuery>) {
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
