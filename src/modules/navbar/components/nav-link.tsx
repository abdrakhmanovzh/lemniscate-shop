import { Link } from 'react-router-dom'
import { cn } from '@/shared/utils'

import { TNavLink } from '../entities'

interface Props {
  className?: string
  link: TNavLink
}

export const NavLink = ({ className, link }: Props) => {
  return (
    <li className={cn('font-medium hover:underline', className)}>
      <Link to={link.path}>
        <span>{link.label}</span>
      </Link>
    </li>
  )
}
