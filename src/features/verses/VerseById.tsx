import * as React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import Link from 'next/link';
import {
  VerseById_VerseDataFragment,
  VerseById_VerseDataFragment$key,
} from '@/__generated__/VerseById_VerseDataFragment.graphql';

type VerseByIdProps = {
  verse: VerseById_VerseDataFragment$key;
};

export const VerseById = ({ verse }: VerseByIdProps) => {
  const data = useFragment(
    graphql`
      fragment VerseById_VerseDataFragment on GitaVerseModel {
        id
        text
        verseNumber
        chapterNumber
      }
    `,
    verse
  );
  if (!data) {
    return null;
  }
  const {
    id,
        text,
        verseNumber,
        chapterNumber
  } = data;
  return (
    <div className="p-2 w-full">
      <div className="h-full flex items-center ">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{verseNumber}</h2>
          {/* <h3><uText</h3> */}
          <p className="text-gray-500">{text}</p>
          {/* <h3>Transliteration</h3>
          <p className="text-gray-500">{transliteration}</p>
          <h3>Meaning</h3>
          <p className="text-gray-500">{meaning}</p>
          <h3>Word Meanings</h3>
          <p className="text-gray-500">{word_meanings}</p> */}
        </div>
      </div>
    </div>
  );
};
