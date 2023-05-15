import { Link, useLocation } from "wouter"

const Navbar = () => {

   const [location] = useLocation()
   const linkToShow = location === '/gallery' ? 'discover' : 'gallery'

   return (
      <nav className="pos-f z-10 t-0 l-0 bg-white s-modal w-100%">
         <section className="py-8 px-12 frcb m-a">
            <Link href="/">
               <a className="h-32 frcc">
                  <img src="/public/CriticalIcons/logo.svg" loading="lazy" alt="logo-hero-section" />
               </a>
            </Link>
            <Link href={`/${linkToShow}`} className="frcc g-8">
               <a className="h-32 frcc">
                  <img className="mt-1" src={`/CriticalIcons/${linkToShow}.svg`} loading="lazy" alt="logo-hero-section" />
               </a>
            </Link>
         </section>
      </nav >
   )
}

export default Navbar