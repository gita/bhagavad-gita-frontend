/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VerseById_VerseDataFragment = {
    readonly _id: string | null;
    readonly title: string | null;
    readonly text: string | null;
    readonly transliteration: string | null;
    readonly verse_number: number | null;
    readonly verse_order: number | null;
    readonly meaning: string | null;
    readonly word_meanings: string | null;
    readonly " $refType": "VerseById_VerseDataFragment";
};
export type VerseById_VerseDataFragment$data = VerseById_VerseDataFragment;
export type VerseById_VerseDataFragment$key = {
    readonly " $data"?: VerseById_VerseDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"VerseById_VerseDataFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VerseById_VerseDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
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
  "type": "GitaVerse",
  "abstractKey": null
};
(node as any).hash = '9b7749943dd7f5604c787fe621839461';
export default node;
