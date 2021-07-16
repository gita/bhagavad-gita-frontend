import * as React from 'react';
import { useRouter } from 'next/router';
import { Suspenseful } from '@/components/Suspenseful';
import { ChapterById } from '@/features/chapters/ChapterById';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { RelayProps, withRelay } from 'relay-nextjs';
import { ChapterNumber_GitaChapterQuery } from '@/__generated__/ChapterNumber_GitaChapterQuery.graphql';
import { Layout } from '@/components/Layout';

export interface IChapterPageProps {}

const ChapterQuery = graphql`
  query ChapterNumber_GitaChapterQuery($chapterNumber: Int) {
    chapters(chapterNumber: $chapterNumber) {
      id
      ...ChapterById_ChapterDataFragment
    }
  }
`;

function HandleData({
  preloadedQuery,
}: RelayProps<{}, ChapterNumber_GitaChapterQuery>) {
  const { chapters } = usePreloadedQuery(ChapterQuery, preloadedQuery);
  if (chapters && chapters[0]) {
    return <ChapterById chapterById={chapters[0]} />;
  }
  return null;
}

function ChapterPage(props: RelayProps<{}, ChapterNumber_GitaChapterQuery>) {
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
  variablesFromContext: (context) => {
    const { chpaterNumber } = context.query;

    return {
      chpaterNumber: typeof chpaterNumber === 'string' ? parseInt(chpaterNumber) : chpaterNumber,
    };
  },
});
