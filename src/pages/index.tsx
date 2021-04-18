import {ChaptersList} from '@/features/chapters/ChaptersList'
import {Suspenseful} from '@/components/Suspenseful'

function HomePage() {
    return <div>
      <Suspenseful>
        <ChaptersList/>
      </Suspenseful>
    </div>
  }
  
  export default HomePage