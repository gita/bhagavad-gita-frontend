import * as React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import Link from 'next/link';
import { ChaptersListQuery } from '../../__generated__/ChaptersListQuery.graphql';
export interface ChaptersListProps {}

export function ChaptersList(props: ChaptersListProps) {
  const data = useLazyLoadQuery<ChaptersListQuery>(
    graphql`
      query ChaptersListQuery {
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
    `,
    {}
  );
  return (
    <div>
      <h1>Chapters List</h1>
      {data.allGitaChapter.map((chapter) => {
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
