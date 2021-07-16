/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VerseOrder_GitaVerseQueryVariables = {
    verseNumber?: number | null;
};
export type VerseOrder_GitaVerseQueryResponse = {
    readonly verses: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"VerseById_VerseDataFragment">;
    } | null> | null;
};
export type VerseOrder_GitaVerseQuery = {
    readonly response: VerseOrder_GitaVerseQueryResponse;
    readonly variables: VerseOrder_GitaVerseQueryVariables;
};



/*
query VerseOrder_GitaVerseQuery(
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
    "name": "VerseOrder_GitaVerseQuery",
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
    "name": "VerseOrder_GitaVerseQuery",
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
    "cacheID": "b1359f3e3288cbddb5133233eaeb64ff",
    "id": null,
    "metadata": {},
    "name": "VerseOrder_GitaVerseQuery",
    "operationKind": "query",
    "text": "query VerseOrder_GitaVerseQuery(\n  $verseNumber: Int\n) {\n  verses(verseNumber: $verseNumber) {\n    id\n    ...VerseById_VerseDataFragment\n  }\n}\n\nfragment VerseById_VerseDataFragment on GitaVerseModel {\n  id\n  text\n  verseNumber\n  chapterNumber\n}\n"
  }
};
})();
(node as any).hash = 'e06c5eac46dc8010c188dc88d7626fa0';
export default node;
