/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VerseNumber_GitaVerseQueryVariables = {
    verseNumber?: number | null;
};
export type VerseNumber_GitaVerseQueryResponse = {
    readonly verses: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"VerseById_VerseDataFragment">;
    } | null> | null;
};
export type VerseNumber_GitaVerseQuery = {
    readonly response: VerseNumber_GitaVerseQueryResponse;
    readonly variables: VerseNumber_GitaVerseQueryVariables;
};



/*
query VerseNumber_GitaVerseQuery(
  $verseNumber: Int
) {
  verses(verseNumber: $verseNumber) {
    id
    ...VerseById_VerseDataFragment
  }
}

fragment VerseById_VerseDataFragment on GitaVerseModel {
  id
  text
  verseNumber
  chapterNumber
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "verseNumber"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "verseNumber",
    "variableName": "verseNumber"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VerseNumber_GitaVerseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaVerseModel",
        "kind": "LinkedField",
        "name": "verses",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "VerseById_VerseDataFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VerseNumber_GitaVerseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaVerseModel",
        "kind": "LinkedField",
        "name": "verses",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "593fb9959c2e1a9a5562e9e4ce46bae8",
    "id": null,
    "metadata": {},
    "name": "VerseNumber_GitaVerseQuery",
    "operationKind": "query",
    "text": "query VerseNumber_GitaVerseQuery(\n  $verseNumber: Int\n) {\n  verses(verseNumber: $verseNumber) {\n    id\n    ...VerseById_VerseDataFragment\n  }\n}\n\nfragment VerseById_VerseDataFragment on GitaVerseModel {\n  id\n  text\n  verseNumber\n  chapterNumber\n}\n"
  }
};
})();
(node as any).hash = 'c301f14aa4f68047c76d0c2bc2df5d6c';
export default node;
