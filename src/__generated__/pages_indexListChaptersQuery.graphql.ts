/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pages_indexListChaptersQueryVariables = {};
export type pages_indexListChaptersQueryResponse = {
    readonly allGitaChapter: ReadonlyArray<{
        readonly name: string | null;
        readonly chapter_summary: string | null;
        readonly slug: {
            readonly current: string | null;
        } | null;
        readonly chapter_number: number | null;
        readonly title: string | null;
        readonly _id: string | null;
    }>;
};
export type pages_indexListChaptersQuery = {
    readonly response: pages_indexListChaptersQueryResponse;
    readonly variables: pages_indexListChaptersQueryVariables;
};



/*
query pages_indexListChaptersQuery {
  allGitaChapter(sort: {chapter_number: ASC}) {
    name
    chapter_summary
    slug {
      current
    }
    chapter_number
    title
    _id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "sort",
        "value": {
          "chapter_number": "ASC"
        }
      }
    ],
    "concreteType": "GitaChapter",
    "kind": "LinkedField",
    "name": "allGitaChapter",
    "plural": true,
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
    "storageKey": "allGitaChapter(sort:{\"chapter_number\":\"ASC\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_indexListChaptersQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_indexListChaptersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5ff527e26858f0d1201d5a7236698d20",
    "id": null,
    "metadata": {},
    "name": "pages_indexListChaptersQuery",
    "operationKind": "query",
    "text": "query pages_indexListChaptersQuery {\n  allGitaChapter(sort: {chapter_number: ASC}) {\n    name\n    chapter_summary\n    slug {\n      current\n    }\n    chapter_number\n    title\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7b12be37b57c1e5edcafda13c66d335d';
export default node;
