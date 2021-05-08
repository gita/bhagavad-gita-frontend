import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import Link from 'next/link';
import {
  GitaChapter,
  GitaChapterFilter,
  GitaChapterSorting,
} from '@/types/api';
export interface ChaptersListProps {}

export function ChaptersList({
  allGitaChapter,
}: {
  allGitaChapter: ReadonlyArray<GitaChapter>;
}) {
  return (
    <div>
      <h1>Chapters List</h1>
      {allGitaChapter.map((chapter) => {
        return (
          <div key={chapter._id}>
            <h2>
              {chapter.chapter_number} {chapter.name}
            </h2>
            <p>{chapter.chapter_summary}</p>
            <Link href={`/chapter/${chapter._id}/${chapter.slug?.current}`}>
              <a>View Chapter</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
