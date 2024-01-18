export const SizesFilter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-semibold">sizes</h4>
      <p className="text-xs tracking-wider text-neutral-700">
        Most of our shoes only come in full sizes. If you are a half size, select your nearest whole
        size too.
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        <div className="flex h-10 w-10 items-center justify-center ring-1 ring-black hover:bg-neutral-300">
          xs
        </div>
        <div className="flex h-10 w-10 items-center justify-center ring-1 ring-black hover:bg-neutral-300">
          s
        </div>
        <div className="flex h-10 w-10 items-center justify-center ring-1 ring-black hover:bg-neutral-300">
          m
        </div>
        <div className="flex h-10 w-10 items-center justify-center ring-1 ring-black hover:bg-neutral-300">
          l
        </div>
        <div className="flex h-10 w-10 items-center justify-center ring-1 ring-black hover:bg-neutral-300">
          xl
        </div>
        <div className="flex h-10 w-10 items-center justify-center ring-1 ring-black hover:bg-neutral-300">
          xxl
        </div>
      </div>
    </div>
  )
}
