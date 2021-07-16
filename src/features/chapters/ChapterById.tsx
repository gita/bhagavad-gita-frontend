import * as React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import Link from 'next/link';
import {
  ChapterById_ChapterDataFragment,
  ChapterById_ChapterDataFragment$key,
} from '@/__generated__/ChapterById_ChapterDataFragment.graphql';

type ChapterByIdProps = {
  chapterById: ChapterById_ChapterDataFragment$key;
};

export function ChapterById({ chapterById }: ChapterByIdProps) {
  const data = useFragment(
    graphql`
      fragment ChapterById_ChapterDataFragment on GitaChapter {
        name
        title
        chapter_number
        chapter_summary
        name_meaning
        name_translation
        name_transliterated
        verses {
          _id
          title
          text
          slug {
            current
          }
          transliteration
          verse_number
          verse_order
          meaning
          word_meanings
        }
      }
    `,
    chapterById
  );
  console.log(data);
  if (!data || !data.verses) {
    return null;
  }
  const {
    name,
    title,
    chapter_number,
    chapter_summary,
    name_meaning,
    name_translation,
    name_transliterated,
    verses,
  } = data;
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        {title}. {name}
      </h1>
      <p>{chapter_summary}</p>
      <p>{name_meaning}</p>
      <p>{name_translation}</p>
      <p>{name_transliterated}</p>
      <div className="flex flex-wrap -m-2">
        {verses.map((verse) => {
          if (!verse) {
            return null;
          }
          console.log(verse);
          return (
            <div key={verse._id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    {verse.title}
                  </h2>
                  <p className="text-gray-500">{verse.text}</p>
                  <p>
                    <Link href={`/verse/${verse.verse_order}`}>
                      <a className="text-indigo-500 inline-flex items-center mt-4">
                        View Verse
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
