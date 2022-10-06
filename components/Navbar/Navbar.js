import Link from 'next/link'

import navStyles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.title}>
        <Link href='/'>E-commerce</Link>
      </div>
      <div className={navStyles.links}>
        <Link href='/'>Home</Link> 
        <Link href='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar