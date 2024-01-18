import { Link } from 'react-router-dom'
import { Logo } from '@/assets/logos'

export const TextLogo = () => {
  return (
    <Link className="flex items-center gap-2 border-b-2 border-black p-2" to="/">
      <img className="h-6 w-6" src={Logo} alt="logo" />
      <span className="text-xl font-medium">lemniscate</span>
    </Link>
  )
}
