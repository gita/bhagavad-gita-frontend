import { graphql, useFragment } from "react-relay/hooks"
import Link from 'next/link';
import { ChapterListItemFragment$key } from "@/__generated__/ChapterListItemFragment.graphql";

export const ChapterListItem = ({chapterRef} : {chapterRef : ChapterListItemFragment$key}) => {
  console.log(chapterRef)
    const chapter = useFragment(graphql`
        fragment ChapterListItemFragment on GitaChapterModel{
            name
            chapterSummary      
            chapterNumber      
            nameTransliterated
            nameTranslated
            versesCount
            nameMeaning
            id
        }
    `,chapterRef)
    return  <div className="xl:w-1/3 md:w-1/2 p-4" key={chapter.id}>
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        {chapter.nameTranslated}
      </h2>
      <p className="leading-relaxed text-base">{chapter.name} </p>
      <p>
        <Link href={`/chapter/${chapter.chapterNumber}`}>
          <a className="text-indigo-500 inline-flex items-center mt-4">
            View Chapter
          </a>
        </Link>
      </p>
    </div>
  </div>
}