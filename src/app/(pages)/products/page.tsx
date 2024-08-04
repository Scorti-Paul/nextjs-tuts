import Link from "next/link"

const Products = () => {
  const productList = [
    { name: 'Gold Standard Whey Protein', price: '843', href: 'gold-standard-whey-protein' },
    { name: 'Thickfix Curve Weight Gainer', price: '843', href: 'thickfix-curve-weight-gainer' },
    { name: 'Ultimate Diet Shake Fat Blaster', price: '843', href: 'ultimate-diet-shake-fat-blaster' },
    { name: 'Personalized Protein Powder', price: '843', href: 'personalized-protein-powder' },
  ]
  return (
    <>
      <div className="font-semibold">All Products</div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {productList.map((list: any) => {
          return (
            <div key={list.name} className="border rounded-lg px-4 py-5">
              <div className="bg-gray-200 w-full h-60 rounded-lg"></div>
              <div className="mt-5 mb-3 text-xl font-semibold">{list.name}</div>
              <div className="font-medium mb-5">GHS{list.price}.00</div>
              <Link href={`products/${list.href}`} className="bg-indigo-500 text-white rounded-xl px-5 py-3">View Details</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products