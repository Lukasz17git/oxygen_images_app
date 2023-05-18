import { Link } from "wouter"
import { basePath } from "../../../basePath"
import useHashLocation from "../../Hooks/useHashLocation"

const Navbar = () => {

   const [location] = useHashLocation()
   const linkToShow = location.includes('gallery') ? 'discover' : 'gallery'

   return (
      <nav className="pos-f z-10 t-0 l-0 bg-white s-modal w-100%">
         <section className="py-8 px-[4vw] frcb m-a">
            <Link href={`${basePath}#`}>
               <a className="h-32 frcc">
                  <img src={`${basePath}CriticalIcons/logo.svg`} loading="lazy" alt="logo-hero-section" />
               </a>
            </Link>
            <Link href={`${basePath}#/${linkToShow}`} className="frcc g-8">
               <a className="h-32 frcc">
                  <img className="mt-1" src={`${basePath}CriticalIcons/${linkToShow}.svg`} loading="lazy" alt="logo-hero-section" />
               </a>
            </Link>
         </section>
      </nav >
   )
}

export default Navbar