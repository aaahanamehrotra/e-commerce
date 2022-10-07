import Image from "next/image"
import Link from "next/link"

import homeStyles from '../styles/Home.module.css'

import ProductCard from "../components/Product/ProductCard"
import ProjectData from "../data/ProjectData"

export default function Home() {
  const data = []
  for (let i = 0; i <= 3; i++) {
    data.push(ProjectData[i])
  }

  const num = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <div className={homeStyles.intro}>
        <div className={homeStyles.text}>
          <div className={homeStyles.title}>
            Lorem Ipsum
          </div>
          <div className={homeStyles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui vivamus arcu felis bibendum ut tristique et egestas.
          </div>
          <div className={homeStyles.buttons}>
            <Link href='/login'>Sign Up</Link>
            <Link href='/products/products'>Products</Link>
          </div>
        </div>
        <Image className={homeStyles.img} alt='product images' src={`/${num(1,5).jpeg}`} height='100' width='100' />
      </div>
      <div className={homeStyles.products}>
        <div className={homeStyles.pTitle}>
          Popular Products
        </div>
        <div className={homeStyles.pCards}>
          <ProductCard data={data} />
        </div>
      </div>
    </>
  )
}
