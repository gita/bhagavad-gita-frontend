/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slug_GitaVerseQueryVariables = {
    id: string;
};
export type Slug_GitaVerseQueryResponse = {
    readonly GitaVerse: {
        readonly _id: string | null;
        readonly " $fragmentRefs": FragmentRefs<"VerseById_VerseDataFragment">;
    } | null;
};
export type Slug_GitaVerseQuery = {
    readonly response: Slug_GitaVerseQueryResponse;
    readonly variables: Slug_GitaVerseQueryVariables;
};



/*
query Slug_GitaVerseQuery(
  $id: ID!
) {
  GitaVerse(id: $id) {
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
    "name": "Slug_GitaVerseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaVerse",
        "kind": "LinkedField",
        "name": "GitaVerse",
        "plural": false,
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
    "name": "Slug_GitaVerseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaVerse",
        "kind": "LinkedField",
        "name": "GitaVerse",
        "plural": false,
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
    "cacheID": "4994488e8ec90328f331c600721184af",
    "id": null,
    "metadata": {},
    "name": "Slug_GitaVerseQuery",
    "operationKind": "query",
    "text": "query Slug_GitaVerseQuery(\n  $id: ID!\n) {\n  GitaVerse(id: $id) {\n    _id\n    ...VerseById_VerseDataFragment\n  }\n}\n\nfragment VerseById_VerseDataFragment on GitaVerse {\n  _id\n  title\n  text\n  transliteration\n  verse_number\n  verse_order\n  meaning\n  word_meanings\n}\n"
  }
};
})();
(node as any).hash = '114b709d5bac0ba1c58c5b4c85839a11';
export default node;
