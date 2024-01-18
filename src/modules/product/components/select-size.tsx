import { cn } from '@/shared/utils'

const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

interface Props {
  setSelected: (value: string) => void
  selected: string | null
}

export const SelectSize = ({ setSelected, selected }: Props) => {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-medium">select size:</h4>
      <div className="flex flex-wrap justify-between">
        {sizes.map((size) => (
          <div
            className={cn(
              'flex h-16 w-16 cursor-pointer items-center justify-center ring-1 ring-black hover:bg-neutral-300',
              selected === size && 'bg-neutral-300'
            )}
            onClick={() => setSelected(size)}
            key={size}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  )
}
