import { Suspenseful } from '@/components/Suspenseful';
import { RelayProps, withRelay } from 'relay-nextjs';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import { getRelayClientEnvironment } from '@/config/relay/getRelayClientEnvironment';
import { pages_indexListChaptersQuery } from '@/__generated__/pages_indexListChaptersQuery.graphql';
import { Layout } from '@/components/Layout';
import { ChapterListItem } from '@/components/ChapterListItem/ChapterListItem';

const ChaptersListQuery = graphql`
  query pages_indexListChaptersQuery {
    chapters {          
      id
      ...ChapterListItemFragment
    }
  }
`;

function HandleData({
  preloadedQuery,
}: RelayProps<{}, pages_indexListChaptersQuery>) {
  const data = usePreloadedQuery(
    ChaptersListQuery,
    preloadedQuery
  );
  if(!data.chapters){
    return null;
  }
  console.log(data);
  return <div>
  <h1>Chapters List</h1>
  <div className="flex flex-wrap -m-4">
    {data.chapters.map((chapter, index) => {
      if(chapter){
        return <ChapterListItem chapterRef={chapter} key={index}/> ;
      }else{
        return null;
      }
      
    })}
  </div>
</div>;
}

function HomePage(props: RelayProps<{}, pages_indexListChaptersQuery>) {
  return (
    <Layout>
      <Suspenseful>
        <HandleData {...props} />
      </Suspenseful>
    </Layout>
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
