/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChapterById_ChapterDataFragment = {
    readonly name: string | null;
    readonly chapterSummary: string | null;
    readonly chapterNumber: number | null;
    readonly nameTransliterated: string | null;
    readonly nameTranslated: string | null;
    readonly versesCount: number | null;
    readonly nameMeaning: string | null;
    readonly verses: ReadonlyArray<{
        readonly id: string;
        readonly text: string | null;
        readonly verseNumber: number | null;
    } | null> | null;
    readonly " $refType": "ChapterById_ChapterDataFragment";
};
export type ChapterById_ChapterDataFragment$data = ChapterById_ChapterDataFragment;
export type ChapterById_ChapterDataFragment$key = {
    readonly " $data"?: ChapterById_ChapterDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ChapterById_ChapterDataFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChapterById_ChapterDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chapterSummary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chapterNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nameTransliterated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nameTranslated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "versesCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nameMeaning",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GitaVerseModel",
      "kind": "LinkedField",
      "name": "verses",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "verseNumber",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GitaChapterModel",
  "abstractKey": null
};
(node as any).hash = '773fd39fcd0003b399331bf1da4b7f49';
export default node;
