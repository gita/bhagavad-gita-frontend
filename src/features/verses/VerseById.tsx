import * as React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';
import Link from 'next/link';
import { Slug_GitaVerseQueryResponse } from '@/__generated__/Slug_GitaVerseQuery.graphql';
import {
  VerseById_VerseDataFragment,
  VerseById_VerseDataFragment$key,
} from '@/__generated__/VerseById_VerseDataFragment.graphql';
import { GitaVerse } from '@/types/api';

type VerseByIdProps = {
  query: Slug_GitaVerseQueryResponse;
};

export const VerseById = ({ query }: VerseByIdProps) => {
  const data = useFragment<VerseById_VerseDataFragment$key>(
    graphql`
      fragment VerseById_VerseDataFragment on GitaVerse {
        _id
        title
        text
        transliteration
        verse_number
        verse_order
        meaning
        word_meanings
      }
    `,
    query.GitaVerse
  );
  if (!data) {
    return null;
  }
  const {
    _id,
    title,
    text,
    transliteration,
    verse_number,
    verse_order,
    meaning,
    word_meanings,
  } = data;
  return (
    <div className="p-2 w-full">
      <div className="h-full flex items-center ">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{title}</h2>
          <h3>Text</h3>
          <p className="text-gray-500">{text}</p>
          <h3>Transliteration</h3>
          <p className="text-gray-500">{transliteration}</p>
          <h3>Meaning</h3>
          <p className="text-gray-500">{meaning}</p>
          <h3>Word Meanings</h3>
          <p className="text-gray-500">{word_meanings}</p>
        </div>
      </div>
    </div>
  );
};
