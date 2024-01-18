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

export const ColorFilter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-semibold">hue</h4>

      <div className="mt-2 flex flex-col gap-2">
        {colors.map((color) => (
          <div className="flex items-center gap-2" key={color.value}>
            <div style={{ backgroundColor: color.value }} className="h-4 w-4 rounded-full"></div>
            {color.label}
          </div>
        ))}
      </div>
    </div>
  )
}
