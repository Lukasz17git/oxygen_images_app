import { Link, useLocation } from "wouter"


const Navbar = () => {

   const [location] = useLocation()
   console.log(location)

   return (
      <nav className="navbar">
         <section className="">
            <Link href="/">
               Hero
            </Link>
            <Link href="/discover">Discover</Link>
            <Link href="/gallery">Gallery</Link>
         </section>
      </nav >
   )
}

export default Navbar