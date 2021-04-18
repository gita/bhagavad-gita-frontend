import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import Link from 'next/link';
import { ChapterByIdQuery } from '@/__generated__/ChapterByIdQuery.graphql';

export interface ChapterByIdProps {
  id: string;
}

export function ChapterById({ id }: ChapterByIdProps) {
  const data = useLazyLoadQuery<ChapterByIdQuery>(
    graphql`
      query ChapterByIdQuery($id: ID!) {
        GitaChapter(id: $id) {
          name
          chapter_summary
          slug {
            current
          }
          name_translation
          name_transliterated
          name_meaning
          chapter_number
          title
          _id
        }
      }
    `,
    { id }
  );
  const { GitaChapter } = data;
  return (
    <div>
      <h1>
        {GitaChapter?.chapter_number}. {GitaChapter?.name}
      </h1>
      <p>{GitaChapter?.chapter_summary}</p>
      <p>{GitaChapter?.name_meaning}</p>
      <p>{GitaChapter?.name_translation}</p>
      <p>{GitaChapter?.name_transliterated}</p>
    </div>
  );
}
