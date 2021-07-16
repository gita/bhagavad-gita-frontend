/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChapterNumber_GitaChapterQueryVariables = {
    chapterNumber?: number | null;
};
export type ChapterNumber_GitaChapterQueryResponse = {
    readonly chapters: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"ChapterById_ChapterDataFragment">;
    } | null> | null;
};
export type ChapterNumber_GitaChapterQuery = {
    readonly response: ChapterNumber_GitaChapterQueryResponse;
    readonly variables: ChapterNumber_GitaChapterQueryVariables;
};



/*
query ChapterNumber_GitaChapterQuery(
  $chapterNumber: Int
) {
  chapters(chapterNumber: $chapterNumber) {
    id
    ...ChapterById_ChapterDataFragment
  }
}

fragment ChapterById_ChapterDataFragment on GitaChapterModel {
  name
  chapterSummary
  chapterNumber
  nameTransliterated
  nameTranslated
  versesCount
  nameMeaning
  verses {
    id
    text
    verseNumber
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "chapterNumber"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "chapterNumber",
    "variableName": "chapterNumber"
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
    "name": "ChapterNumber_GitaChapterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaChapterModel",
        "kind": "LinkedField",
        "name": "chapters",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ChapterById_ChapterDataFragment"
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
    "name": "ChapterNumber_GitaChapterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaChapterModel",
        "kind": "LinkedField",
        "name": "chapters",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "34135e953c3be12d04a8910d65c4c0db",
    "id": null,
    "metadata": {},
    "name": "ChapterNumber_GitaChapterQuery",
    "operationKind": "query",
    "text": "query ChapterNumber_GitaChapterQuery(\n  $chapterNumber: Int\n) {\n  chapters(chapterNumber: $chapterNumber) {\n    id\n    ...ChapterById_ChapterDataFragment\n  }\n}\n\nfragment ChapterById_ChapterDataFragment on GitaChapterModel {\n  name\n  chapterSummary\n  chapterNumber\n  nameTransliterated\n  nameTranslated\n  versesCount\n  nameMeaning\n  verses {\n    id\n    text\n    verseNumber\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c58df488415e0c622ee2fc0d72d2a2f1';
export default node;
