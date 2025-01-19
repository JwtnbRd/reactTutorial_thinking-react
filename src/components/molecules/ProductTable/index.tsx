import { ProductCategoryRow } from "../ProductCategoryRow"
import { ProductRow } from "../ProductRow"

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

type ProductTableProps = {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

export const ProductTable = ({ products, filterText ,inStockOnly }: ProductTableProps) => {
  // const categories = products.filter((product, i, self) =>
  //   i === self.findIndex((t) => t.category === product.category)
  // ).map((product) => {
  //   return product.category
  // })

  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          name={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    // 重複するcategoryに対する対応
    lastCategory = product.category;
  });

  return (
    <>
      <div className="w-full flex justify-around items-center">
        <p className="font-bold">Name</p>
        <p className="font-bold">Price</p>
      </div>
      <div>
        {rows}
        {/* {categories.map((category, i) => (
          <div key={i}>
            <ProductCategoryRow name={category} />
            {products.map((product: Product, i) => (
              <ProductRow key={i} product={product} />
            ))}
          </div>
        ))} */}
      </div>
    </>
  )
}