type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

type ProductRowProps = {
  product: Product;
}

export const ProductRow = ({
  product
}: ProductRowProps) => {
  const name = product.stocked ? product.name :
  <span style={{ color: 'red' }}>
    {product.name}
  </span>;


  return (
    <div className="w-full flex justify-around items-center">
      <p className="w-1/5 text-left">{name}</p>
      <p className="font-semibold w-1/6 text-center">{`${product.price}`}</p>
    </div>
  )
}