type ProductCategoryRowProps = {
  name: string;
}


export const ProductCategoryRow = ({ name }: ProductCategoryRowProps) => {
  return (
    <div className="w-full text-center">
      <p className="font-semibold">{name}</p>
    </div>
  )
}