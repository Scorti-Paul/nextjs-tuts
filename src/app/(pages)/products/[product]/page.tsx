"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"

const ProductDetails = ({params}: {params: {product: string}}) => {
  const router = useRouter();
  return (
    <>
    <button onClick={() => router.push('/products')} className="hover:cursor-pointer">&lt; Back</button>
   
    <div>Single product details {params.product}</div>
    </>
  )
}

export default ProductDetails