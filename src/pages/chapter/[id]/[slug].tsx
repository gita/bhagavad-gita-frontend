import * as React from 'react';
import {useRouter} from 'next/router'
import {Suspenseful} from '@/components/Suspenseful'
import { ChapterById } from '@/features/chapters/ChapterById';

export interface IChapterPageProps {
}

export default function ChapterPage (props: IChapterPageProps) {
  const router = useRouter();
  const {id, slug} = router.query
  console.log(id, slug);
  return (
    <div>
      <Suspenseful>
        <ChapterById id={id} />
      </Suspenseful>
    </div>
  );
}
