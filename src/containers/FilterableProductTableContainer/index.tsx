import { useState } from "react"
import { ProductTable } from "../../components/molecules/ProductTable"
import { SearchBar } from "../../components/molecules/SearchBar"
import { PRODUCTS } from "../../constants/Products"

export const FilterableProductTableContainer = () => {
  const products = PRODUCTS
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div className="m-5">
      <div className="my-4">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
      </div>
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  )
}