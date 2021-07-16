/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ChapterNumber_GitaChapterQueryVariables = {
    chapter_number: number;
};
export type ChapterNumber_GitaChapterQueryResponse = {
    readonly allGitaChapter: ReadonlyArray<{
        readonly _id: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ChapterById_ChapterDataFragment">;
    }>;
};
export type ChapterNumber_GitaChapterQuery = {
    readonly response: ChapterNumber_GitaChapterQueryResponse;
    readonly variables: ChapterNumber_GitaChapterQueryVariables;
};



/*
query ChapterNumber_GitaChapterQuery(
  $chapter_number: Float!
) {
  allGitaChapter(where: {chapter_number: {eq: $chapter_number}}) {
    _id
    ...ChapterById_ChapterDataFragment
  }
}

fragment ChapterById_ChapterDataFragment on GitaChapter {
  name
  title
  chapter_number
  chapter_summary
  name_meaning
  name_translation
  name_transliterated
  verses {
    _id
    title
    text
    slug {
      current
    }
    transliteration
    verse_number
    verse_order
    meaning
    word_meanings
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "chapter_number"
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
            "variableName": "chapter_number"
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
        "concreteType": "GitaChapter",
        "kind": "LinkedField",
        "name": "allGitaChapter",
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
    "type": "RootQuery",
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
        "concreteType": "GitaChapter",
        "kind": "LinkedField",
        "name": "allGitaChapter",
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
          (v3/*: any*/),
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
            "name": "chapter_summary",
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
            "concreteType": "GitaVerse",
            "kind": "LinkedField",
            "name": "verses",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "93f8ad2391049f7a441efbbfc137ce09",
    "id": null,
    "metadata": {},
    "name": "ChapterNumber_GitaChapterQuery",
    "operationKind": "query",
    "text": "query ChapterNumber_GitaChapterQuery(\n  $chapter_number: Float!\n) {\n  allGitaChapter(where: {chapter_number: {eq: $chapter_number}}) {\n    _id\n    ...ChapterById_ChapterDataFragment\n  }\n}\n\nfragment ChapterById_ChapterDataFragment on GitaChapter {\n  name\n  title\n  chapter_number\n  chapter_summary\n  name_meaning\n  name_translation\n  name_transliterated\n  verses {\n    _id\n    title\n    text\n    slug {\n      current\n    }\n    transliteration\n    verse_number\n    verse_order\n    meaning\n    word_meanings\n  }\n}\n"
  }
};
})();
(node as any).hash = '065121eb8a67148f6db3038045b31667';
export default node;
