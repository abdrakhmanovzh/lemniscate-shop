import { RadioGroupItem, RadioGroup } from '@/shared/components/ui/radio-group'
import { Label } from '@/shared/components/ui/label'

import { Category } from '../entities'

interface Props {
  setCategory: (category: Category) => void
}

export const CategoryFilter = ({ setCategory }: Props) => {
  return (
    <div>
      <RadioGroup
        onValueChange={(value) => setCategory(value as Category)}
        defaultValue={Category.ALL}
        className="gap-4"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value={Category.MEN} id={Category.MEN} />
          <Label htmlFor={Category.MEN}>{Category.MEN}</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value={Category.WOMEN} id={Category.WOMEN} />
          <Label htmlFor={Category.WOMEN}>{Category.WOMEN}</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value={Category.ELECTRONICS} id={Category.ELECTRONICS} />
          <Label htmlFor={Category.ELECTRONICS}>{Category.ELECTRONICS}</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value={Category.JEWELERY} id={Category.JEWELERY} />
          <Label htmlFor={Category.JEWELERY}>{Category.JEWELERY}</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value={Category.ALL} id={Category.ALL} />
          <Label htmlFor={Category.ALL}>{Category.ALL}</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
