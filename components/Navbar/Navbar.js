<<<<<<< HEAD
import Link from "next/link";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBagShopping,
//   faUser,
//   faMagnifyingGlass as search,
// } from "@fortawesome/free-solid-svg-icons";

import navStyles from "./Navbar.module.css";

function Navbar({ session }) {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.title}>
        <Link href="/">E-commerce</Link>
      </div>
      <div className={navStyles.links}>
        <Link href="/">Home</Link>
        <Link href="/products/">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={navStyles.links}>
        <Link href="/search">
          {/* <FontAwesomeIcon icon={search} className={navStyles.icon} /> */}
          Search
        </Link>
        <Link href="/cart">
          {/* <FontAwesomeIcon icon={faBagShopping} className={navStyles.icon} /> */}
          Products
        </Link>
        {/* <Link href="/login"> */}
        {/* <FontAwesomeIcon icon={faUser} className={navStyles.icon} /> */}
        {/* Sign In */}
        {/* </Link> */}
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()} type="submit">
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
=======
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser, faMagnifyingGlass as search} from '@fortawesome/free-solid-svg-icons'

import navStyles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.title}>
        <Link href='/'>E-commerce</Link>
      </div>
      <div className={navStyles.links}>
        <Link href='/'>Home</Link> 
        <Link href='/products/'>Products</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className={navStyles.links}>
        <Link href='/search'><FontAwesomeIcon icon={search} className={navStyles.icon}/></Link> 
        <Link href='/cart'><FontAwesomeIcon icon={faBagShopping} className={navStyles.icon} /></Link>
        <Link href='/login'><FontAwesomeIcon icon={faUser} className={navStyles.icon} /></Link>
      </div>
    </nav>
  )
}

export default Navbar
>>>>>>> 6f6c25a0857451781b81b61f49e23120c9c8f162
