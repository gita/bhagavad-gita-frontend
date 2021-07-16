/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type VerseOrder_GitaVerseQueryVariables = {
    verse_order: number;
};
export type VerseOrder_GitaVerseQueryResponse = {
    readonly allGitaVerse: ReadonlyArray<{
        readonly _id: string | null;
        readonly " $fragmentRefs": FragmentRefs<"VerseById_VerseDataFragment">;
    }>;
};
export type VerseOrder_GitaVerseQuery = {
    readonly response: VerseOrder_GitaVerseQueryResponse;
    readonly variables: VerseOrder_GitaVerseQueryVariables;
};



/*
query VerseOrder_GitaVerseQuery(
  $verse_order: Float!
) {
  allGitaVerse(where: {chapter_number: {eq: $verse_order}}) {
    _id
    ...VerseById_VerseDataFragment
  }
}

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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "verse_order"
  }
],
v1 = [
  {
    "fields": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "eq",
            "variableName": "verse_order"
          }
        ],
        "kind": "ObjectValue",
        "name": "chapter_number"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
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
        "concreteType": "GitaVerse",
        "kind": "LinkedField",
        "name": "allGitaVerse",
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
    "type": "RootQuery",
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
        "concreteType": "GitaVerse",
        "kind": "LinkedField",
        "name": "allGitaVerse",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c79ef1dff3ab80998ff398ec891c297a",
    "id": null,
    "metadata": {},
    "name": "VerseOrder_GitaVerseQuery",
    "operationKind": "query",
    "text": "query VerseOrder_GitaVerseQuery(\n  $verse_order: Float!\n) {\n  allGitaVerse(where: {chapter_number: {eq: $verse_order}}) {\n    _id\n    ...VerseById_VerseDataFragment\n  }\n}\n\nfragment VerseById_VerseDataFragment on GitaVerse {\n  _id\n  title\n  text\n  transliteration\n  verse_number\n  verse_order\n  meaning\n  word_meanings\n}\n"
  }
};
})();
(node as any).hash = 'd70216667343c1117a9f0bb6b6d51f22';
export default node;
