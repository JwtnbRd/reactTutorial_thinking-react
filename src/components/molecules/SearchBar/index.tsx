import { CheckBox } from "../../atoms/Inputs/CheckBox"
import { TextInput } from "../../atoms/Inputs/TextInput"

type SearchBarProps = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (checked: boolean) => void;
}

export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}: SearchBarProps) => {
  return (
    <form>
      <TextInput
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <CheckBox
        type="checkbox"
        label="Only show products in stock"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      />
    </form>
  )
}
