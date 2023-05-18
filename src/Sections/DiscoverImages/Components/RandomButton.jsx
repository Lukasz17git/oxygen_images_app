import { useLocation } from "wouter"
import Button from "../../../Components/Button"


const RandomButton = () => {

   const [location, setLocation] = useLocation()
   const handleSearch = () => {
      setLocation(`discover${location.slice(-1) === '/' ? '' : '/'}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   return (
      <Button
         text='Search 10 more'
         className='m-a my-32 bg-main-light animate-fade animate-delay-500'
         onClick={handleSearch} />
   )
}

export default RandomButton