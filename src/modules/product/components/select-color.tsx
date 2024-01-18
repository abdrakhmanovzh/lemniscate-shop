import { cn } from '@/shared/utils'

const colors = [
  {
    value: '#F5F4F0',
    label: 'white'
  },
  {
    value: '#49607C',
    label: 'blue'
  },
  {
    value: '#BBB9D5',
    label: 'purple'
  },
  {
    value: '#3B3B3B',
    label: 'black'
  },
  {
    value: '#B14754',
    label: 'red'
  }
]

interface Props {
  setSelected: (value: string) => void
  selected: string | null
}

export const SelectColor = ({ setSelected, selected }: Props) => {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-medium">select color:</h4>
      <div className="flex flex-wrap justify-between">
        {colors.map((color) => (
          <div
            className={cn(
              'h-14 w-14 rounded-full',
              selected === color.label && 'ring-4 ring-black'
            )}
            style={{ backgroundColor: color.value }}
            onClick={() => setSelected(color.label)}
            key={color.value}
          ></div>
        ))}
      </div>
    </div>
  )
}
