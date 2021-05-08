/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChapterById_ChapterDataFragment = {
    readonly name: string | null;
    readonly chapter_number: number | null;
    readonly chapter_summary: string | null;
    readonly name_meaning: string | null;
    readonly name_translation: string | null;
    readonly name_transliterated: string | null;
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
      "name": "chapter_number",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chapter_summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name_meaning",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name_translation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name_transliterated",
      "storageKey": null
    }
  ],
  "type": "GitaChapter",
  "abstractKey": null
};
(node as any).hash = '450ecc98eb291567afe2405f99ff324f';
export default node;
