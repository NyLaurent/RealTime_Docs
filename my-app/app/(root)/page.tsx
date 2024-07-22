
import { Button } from '@/components/ui/button'
import {Editor} from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut,SignInButton,UserButton,SignedIn } from '@clerk/nextjs'


const Home = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center
        gap-2'>
          <p className='document-title'>Share</p>
        </div>

      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor/>
    </div>
  )
}

export default Home