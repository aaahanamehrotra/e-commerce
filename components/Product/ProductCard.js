import Link from 'next/link'
import Image from 'next/image'

import cardStyles from './ProductCard.module.css'

function ProductCard(props) {
  const products = props.data
  return (
    <>
      {
        products.map((data) => (
          <div key='1' className={cardStyles.card}>
            <Image key='1' className={cardStyles.img} src={data.img} width='100' height='100' alt='product image'/>
            <div key='2' className={cardStyles.title}>{data.name}</div>
            <div key='3' className={cardStyles.gender}>{data.gender}</div>
            <div key='4' className={cardStyles.description}>{data.description}</div>
            <div key='5' className={cardStyles.price}>{data.price}</div>
            <Link href={`/products/${data.id}`}>View</Link>
          </div>
        ))
      }
    </>
  )
}

export default ProductCard