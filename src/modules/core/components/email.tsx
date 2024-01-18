import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

export const Email = () => {
  return (
    <section className="my-20 flex h-[45svh] flex-col items-center justify-center gap-6 bg-[#F8F7F5] px-[30%]">
      <h2 className="text-3xl font-bold">want first dibs?</h2>
      <p className="text-center">
        join our email list and be the first to know about new limited edition products, material
        innovations, and lots of other fun updates.
      </p>

      <div className="flex w-full gap-2">
        <Input placeholder="enter your email address" className="bg-white" />
        <Button>sign up</Button>
      </div>
    </section>
  )
}
