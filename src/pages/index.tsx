import { ChaptersList } from '@/features/chapters/ChaptersList';
import { Suspenseful } from '@/components/Suspenseful';
import { RelayProps, withRelay } from 'relay-nextjs';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { pages_indexListChaptersQuery } from '@/__generated__/pages_indexListChaptersQuery.graphql';

const ChaptersListQuery = graphql`
  query pages_indexListChaptersQuery {
    allGitaChapter(sort: { chapter_number: ASC }) {
      name
      chapter_summary
      slug {
        current
      }
      chapter_number
      title
      _id
    }
  }
`;

function HandleData({
  preloadedQuery,
}: RelayProps<{}, pages_indexListChaptersQuery>) {
  const { allGitaChapter } = usePreloadedQuery(
    ChaptersListQuery,
    preloadedQuery
  );
  return <ChaptersList allGitaChapter={allGitaChapter} />;
}

function HomePage(props: RelayProps<{}, pages_indexListChaptersQuery>) {
  return (
    <div>
      <Suspenseful>
        <HandleData {...props} />
      </Suspenseful>
    </div>
  );
}

export default withRelay(HomePage, ChaptersListQuery, {
  createClientEnvironment: () => getRelayClientEnvironment()!,
  createServerEnvironment: async () => {
    const { getRelayServerEnvironment } = await import(
      '@/config/relay/server/getRelayServerEnvironment'
    );

    return getRelayServerEnvironment();
  },
});
