import SecondHeroImage from '@/assets/second-hero.avif'

export const SecondHero = () => {
  return (
    <section className="relative h-[75svh] w-full">
      <img className="h-full w-full object-cover" src={SecondHeroImage} alt="Hero" />
    </section>
  )
}
