/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChapterListItemFragment = {
    readonly name: string | null;
    readonly chapterSummary: string | null;
    readonly chapterNumber: number | null;
    readonly nameTransliterated: string | null;
    readonly nameTranslated: string | null;
    readonly versesCount: number | null;
    readonly nameMeaning: string | null;
    readonly id: string;
    readonly " $refType": "ChapterListItemFragment";
};
export type ChapterListItemFragment$data = ChapterListItemFragment;
export type ChapterListItemFragment$key = {
    readonly " $data"?: ChapterListItemFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ChapterListItemFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChapterListItemFragment",
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
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "GitaChapterModel",
  "abstractKey": null
};
(node as any).hash = 'afc07ef746db390658f80aebfab6b863';
export default node;
