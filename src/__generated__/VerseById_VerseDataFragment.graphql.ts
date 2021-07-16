/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VerseById_VerseDataFragment = {
    readonly id: string;
    readonly text: string | null;
    readonly verseNumber: number | null;
    readonly chapterNumber: number | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "chapterNumber",
      "storageKey": null
    }
  ],
  "type": "GitaVerseModel",
  "abstractKey": null
};
(node as any).hash = '66588d21b09124d0b9d3576ce72069d9';
export default node;
