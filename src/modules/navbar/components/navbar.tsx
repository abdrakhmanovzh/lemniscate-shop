import { TextLogo } from '@/modules/core/components'

import { NavButtons } from './nav-buttons'
import { NavLink } from './nav-link'
import { links } from '../lib'

export const Navbar = () => {
  return (
    <nav className="flex h-20 items-center border-b-2 border-black px-[5%]">
      <ul className="hidden flex-1 items-center gap-10 lg:flex">
        {links.map((link) => (
          <NavLink key={link.label} link={link} />
        ))}
      </ul>

      <TextLogo />

      <NavButtons />
    </nav>
  )
}
