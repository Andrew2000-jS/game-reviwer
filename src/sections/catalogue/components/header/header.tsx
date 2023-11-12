import { SearchInput } from '@/shared'
import Link from 'next/link'

function Header () {
  return (
    <>
      <div className="mb-5 w-full">
        <div className="flex items-center gap-5">
          <div>
            <SearchInput placeholder="Find game" />
          </div>
          <div className="flex gap-5">
            <Link href="/">Discover</Link>
            <Link href="/">Explore</Link>
            <Link href="/">News</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
