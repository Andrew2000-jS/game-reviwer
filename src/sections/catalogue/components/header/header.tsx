import { SearchInput } from '@/shared'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'

function Header () {
  const dropdownItems = ['Discover', 'Explore', 'News']
  const [items, setItems] = useState<string>(dropdownItems[0])

  return (
    <>
      <div className="mb-5 w-full">
        <div className="flex items-center gap-5">
          <div>
            <SearchInput placeholder="Find game" />
          </div>
          <div className="md:flex gap-5 hidden">
            <Link href="/">Discover</Link>
            <Link href="/">Explore</Link>
            <Link href="/">News</Link>
          </div>
          <div className='block md:hidden'>
          <Dropdown>
            <DropdownTrigger>{items}</DropdownTrigger>
            <DropdownMenu
              aria-label="Example with disabled actions"
              disabledKeys={['edit', 'delete']}
            >
              {dropdownItems.map((e) => (
                <DropdownItem key={e} onClick={() => setItems(e)}>{e}</DropdownItem>
              ))}

            </DropdownMenu>
          </Dropdown>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header
