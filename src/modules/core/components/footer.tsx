import { links } from '@/modules/navbar'
import { Link } from 'react-router-dom'
import { cn } from '@/shared/utils'

interface Props {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={cn('flex flex-col bg-neutral-700 px-[10%] py-10 text-white', className)}>
      <div className="flex gap-64">
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-semibold">HELP</h4>
          <ul className="space-y-2 text-sm">
            <li>1-111-111-1111</li>
            <li>help@example.com</li>
            <li>
              <Link to="/faq">FAQ / contact us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-semibold">SHOP</h4>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <Link className="hover:underline" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 flex justify-center gap-2">
        <span className="text-sm">© 2023 lemniscate. all rights reserved.</span>
        <Link className="text-sm underline" to="#">
          privacy
        </Link>
        <span className="text-sm">&</span>
        <Link className="text-sm underline" to="#">
          terms
        </Link>
      </div>
    </footer>
  )
}
