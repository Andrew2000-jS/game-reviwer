'use client'

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { useState } from 'react'
import Link from 'next/link'
import styles from './styles/nav.module.css'
import Image from 'next/image'

export default function App () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Home', 'About Us', 'Portfolio', 'News', 'Contact Us']

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="/favicon.ico" alt="logo" width={50} height={50} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className={styles.navItem}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={styles.navItem}>
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={styles.navItem}>
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={styles.navItem}>
            News
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" size="sm">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full ${
                  index === 2
                    ? 'text-orange-500'
                    : index === menuItems.length - 1
                    ? 'text-red-500'
                    : 'text-white'
                }`}
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
    </Navbar>
  )
}
