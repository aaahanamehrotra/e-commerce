import productsStyles from '../../styles/Products.module.css'

import ProductData from '../../data/ProductData'
import ProductCard from '../../components/Product/ProductCard'

function products() {
  return (
    <>
      <div className={productsStyles.products}>
        <h1>Our Products</h1>
        <div className={productsStyles.cards}>
          <ProductCard data={ProductData}/>
        </div>
      </div>
    </>
  )
}

export default products