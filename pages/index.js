import Image from "next/image"
import Link from "next/link"

import homeStyles from '../styles/Home.module.css'

import ProductCard from "../components/Product/ProductCard"
import ProductData from "../data/ProductData"
import AchievementData from '../data/AchievementsData'

export default function Home() {
  const data = []

  for (let i = 0; i <= 3; i++) {
    data.push(ProductData[i])
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
            <Link href='/products/'>Products</Link>
          </div>
        </div>
        <Image className={homeStyles.img} alt='product images' src={`/${num(1,10)}.jpeg`} height='500' width='500' />
      </div>
      <div className={homeStyles.achievements}>
        <div className={homeStyles.aTitle}>
          Achievements
        </div>
        <div className={homeStyles.aCards}>
          {
            AchievementData.map(data => (
              <div key='1' className={homeStyles.aCard}>
                <div className={homeStyles.aValue}>
                  {data.value}
                </div>
                <div className={homeStyles.aName}>
                  {data.name}
                </div>
              </div>
            ))
          }
        </div>
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
