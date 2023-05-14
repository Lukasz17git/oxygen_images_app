import { Route } from "wouter"
import Hero from "../Sections/Hero/Hero"
import Discover from "../Sections/DiscoverImages/Discover"
import Gallery from "../Sections/Gallery/Gallery"



const Router = () => {
   return (
      <>
         <Route path="/" component={Hero} />
         <Route path="/discover" component={Discover} />
         <Route path="/gallery" component={Gallery} />
      </>
   )
}



export default Router