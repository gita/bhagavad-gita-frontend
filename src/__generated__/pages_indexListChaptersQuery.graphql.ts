/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pages_indexListChaptersQueryVariables = {};
export type pages_indexListChaptersQueryResponse = {
    readonly chapters: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"ChapterListItemFragment">;
    } | null> | null;
};
export type pages_indexListChaptersQuery = {
    readonly response: pages_indexListChaptersQueryResponse;
    readonly variables: pages_indexListChaptersQueryVariables;
};



/*
query pages_indexListChaptersQuery {
  chapters {
    id
    ...ChapterListItemFragment
  }
}

fragment ChapterListItemFragment on GitaChapterModel {
  name
  chapterSummary
  chapterNumber
  nameTransliterated
  nameTranslated
  versesCount
  nameMeaning
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_indexListChaptersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GitaChapterModel",
        "kind": "LinkedField",
        "name": "chapters",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ChapterListItemFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_indexListChaptersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "GitaChapterModel",
        "kind": "LinkedField",
        "name": "chapters",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
            "name": "chapterSummary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "chapterNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nameTransliterated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nameTranslated",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "versesCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nameMeaning",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4ae90fded9b0ba08f417c470d067806a",
    "id": null,
    "metadata": {},
    "name": "pages_indexListChaptersQuery",
    "operationKind": "query",
    "text": "query pages_indexListChaptersQuery {\n  chapters {\n    id\n    ...ChapterListItemFragment\n  }\n}\n\nfragment ChapterListItemFragment on GitaChapterModel {\n  name\n  chapterSummary\n  chapterNumber\n  nameTransliterated\n  nameTranslated\n  versesCount\n  nameMeaning\n  id\n}\n"
  }
};
})();
(node as any).hash = '687e794763a83ce07606af0243e953c0';
export default node;
