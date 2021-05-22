/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChapterById_ChapterDataFragment = {
    readonly name: string | null;
    readonly title: string | null;
    readonly chapter_number: number | null;
    readonly chapter_summary: string | null;
    readonly name_meaning: string | null;
    readonly name_translation: string | null;
    readonly name_transliterated: string | null;
    readonly verses: ReadonlyArray<{
        readonly _id: string | null;
        readonly title: string | null;
        readonly text: string | null;
        readonly slug: {
            readonly current: string | null;
        } | null;
        readonly transliteration: string | null;
        readonly verse_number: number | null;
        readonly verse_order: number | null;
        readonly meaning: string | null;
        readonly word_meanings: string | null;
    } | null> | null;
    readonly " $refType": "ChapterById_ChapterDataFragment";
};
export type ChapterById_ChapterDataFragment$data = ChapterById_ChapterDataFragment;
export type ChapterById_ChapterDataFragment$key = {
    readonly " $data"?: ChapterById_ChapterDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ChapterById_ChapterDataFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
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
    (v0/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GitaVerse",
      "kind": "LinkedField",
      "name": "verses",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "_id",
          "storageKey": null
        },
        (v0/*: any*/),
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
          "concreteType": "Slug",
          "kind": "LinkedField",
          "name": "slug",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "current",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "transliteration",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "verse_number",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "verse_order",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "meaning",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "word_meanings",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GitaChapter",
  "abstractKey": null
};
})();
(node as any).hash = 'c7e3f6200b9583be26c599c294246591';
export default node;
