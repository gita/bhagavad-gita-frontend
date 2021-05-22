/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Slug_GitaChapterQueryVariables = {
    id: string;
};
export type Slug_GitaChapterQueryResponse = {
    readonly GitaChapter: {
        readonly _id: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ChapterById_ChapterDataFragment">;
    } | null;
};
export type Slug_GitaChapterQuery = {
    readonly response: Slug_GitaChapterQueryResponse;
    readonly variables: Slug_GitaChapterQueryVariables;
};



/*
query Slug_GitaChapterQuery(
  $id: ID!
) {
  GitaChapter(id: $id) {
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
    "name": "Slug_GitaChapterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaChapter",
        "kind": "LinkedField",
        "name": "GitaChapter",
        "plural": false,
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
    "name": "Slug_GitaChapterQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GitaChapter",
        "kind": "LinkedField",
        "name": "GitaChapter",
        "plural": false,
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
    "cacheID": "2672b822b6f14851c50b8aa5fcc34337",
    "id": null,
    "metadata": {},
    "name": "Slug_GitaChapterQuery",
    "operationKind": "query",
    "text": "query Slug_GitaChapterQuery(\n  $id: ID!\n) {\n  GitaChapter(id: $id) {\n    _id\n    ...ChapterById_ChapterDataFragment\n  }\n}\n\nfragment ChapterById_ChapterDataFragment on GitaChapter {\n  name\n  title\n  chapter_number\n  chapter_summary\n  name_meaning\n  name_translation\n  name_transliterated\n  verses {\n    _id\n    title\n    text\n    slug {\n      current\n    }\n    transliteration\n    verse_number\n    verse_order\n    meaning\n    word_meanings\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f713dde84b6296c7c0386d482cd44a4c';
export default node;
