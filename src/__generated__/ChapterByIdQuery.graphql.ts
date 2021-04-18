/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ChapterByIdQueryVariables = {
    id: string;
};
export type ChapterByIdQueryResponse = {
    readonly GitaChapter: {
        readonly name: string | null;
        readonly chapter_summary: string | null;
        readonly slug: {
            readonly current: string | null;
        } | null;
        readonly name_translation: string | null;
        readonly name_transliterated: string | null;
        readonly name_meaning: string | null;
        readonly chapter_number: number | null;
        readonly title: string | null;
        readonly _id: string | null;
    } | null;
};
export type ChapterByIdQuery = {
    readonly response: ChapterByIdQueryResponse;
    readonly variables: ChapterByIdQueryVariables;
};



/*
query ChapterByIdQuery(
  $id: ID!
) {
  GitaChapter(id: $id) {
    name
    chapter_summary
    slug {
      current
    }
    name_translation
    name_transliterated
    name_meaning
    chapter_number
    title
    _id
  }
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "GitaChapter",
    "kind": "LinkedField",
    "name": "GitaChapter",
    "plural": false,
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
        "name": "chapter_summary",
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
        "kind": "ScalarField",
        "name": "name_meaning",
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
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChapterByIdQuery",
    "selections": (v1/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChapterByIdQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3df45d9d5628e08f5f7236e836fe4d3e",
    "id": null,
    "metadata": {},
    "name": "ChapterByIdQuery",
    "operationKind": "query",
    "text": "query ChapterByIdQuery(\n  $id: ID!\n) {\n  GitaChapter(id: $id) {\n    name\n    chapter_summary\n    slug {\n      current\n    }\n    name_translation\n    name_transliterated\n    name_meaning\n    chapter_number\n    title\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'de984a643c876650230a7e7cde63a02c';
export default node;
