import { Button } from '@/shared/components/ui/button'
import HeroImage from '@/assets/hero.avif'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className="relative h-[75svh] w-full px-[10%]">
      <img className="h-full w-full object-cover" src={HeroImage} alt="Hero" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-5xl font-bold text-white">take that, weather</h1>
        <p className="mt-4 text-center text-lg font-semibold text-white">
          water-repellent mizzles are cozy inside and extra grippy outside.
        </p>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-[45%] space-x-8">
        <Button
          className="rounded-none p-6 font-semibold hover:bg-neutral-800 hover:text-white"
          variant={'secondary'}
          asChild
        >
          <Link to={'/men'}>shop men</Link>
        </Button>

        <Button
          className="rounded-none p-6 font-semibold hover:bg-neutral-800 hover:text-white"
          variant={'secondary'}
          asChild
        >
          <Link to={'/women'}>shop women</Link>
        </Button>
      </div>
    </section>
  )
}
