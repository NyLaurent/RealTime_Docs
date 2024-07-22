
import { Button } from '@/components/ui/button'
import {Editor} from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedOut,SignInButton,UserButton,SignedIn } from '@clerk/nextjs'


const Home = () => {
  return (
    <div>
      <Header>

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