import { Link, useLocation } from "wouter"

const Navbar = () => {

   const [location] = useLocation()
   const linkToShow = location === '/gallery' ? 'discover' : 'gallery'

   return (
      <nav className="pos-f z-10 t-0 l-0 bg-white s-modal w-100%">
         <section className="py-8 px-[4vw] frcb m-a">
            <Link href="/oxygen_images_app/">
               <a className="h-32 frcc">
                  <img src="/CriticalIcons/logo.svg" loading="lazy" alt="logo-hero-section" />
               </a>
            </Link>
            <Link href={`/oxygen_images_app/${linkToShow}`} className="frcc g-8">
               <a className="h-32 frcc">
                  <img className="mt-1" src={`/CriticalIcons/${linkToShow}.svg`} loading="lazy" alt="logo-hero-section" />
               </a>
            </Link>
         </section>
      </nav >
   )
}

export default Navbar