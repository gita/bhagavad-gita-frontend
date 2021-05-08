import * as React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import Link from 'next/link';
import { ChapterByIdQuery } from '@/__generated__/ChapterByIdQuery.graphql';
import { Slug_GitaChapterQueryResponse } from '@/__generated__/Slug_GitaChapterQuery.graphql';
import {
  ChapterById_ChapterDataFragment,
  ChapterById_ChapterDataFragment$key,
} from '@/__generated__/ChapterById_ChapterDataFragment.graphql';
import { GitaChapter } from '@/types/api';

type ChapterByIdProps = {
  query: Slug_GitaChapterQueryResponse;
};

export function ChapterById({ query }: ChapterByIdProps) {
  const data = useFragment<ChapterById_ChapterDataFragment$key>(
    graphql`
      fragment ChapterById_ChapterDataFragment on GitaChapter {
        name
        chapter_number
        chapter_summary
        name_meaning
        name_translation
        name_transliterated
      }
    `,
    query.GitaChapter
  );
  if (!data) {
    return null;
  }
  const {
    name,
    chapter_number,
    chapter_summary,
    name_meaning,
    name_translation,
    name_transliterated,
  } = data;
  return (
    <div>
      <h1>
        {chapter_number}. {name}
      </h1>
      <p>{chapter_summary}</p>
      <p>{name_meaning}</p>
      <p>{name_translation}</p>
      <p>{name_transliterated}</p>
    </div>
  );
}
