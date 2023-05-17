import { Route } from "wouter"
import Hero from "../Sections/Hero/Hero"
import Discover from "../Sections/DiscoverImages/Discover"
import Gallery from "../Sections/Gallery/Gallery"



const Router = () => {
   return (
      <>
         <Route path="/oxygen_images_app/" component={Hero} />
         <Route path="/oxygen_images_app/discover/:search/:page" component={Discover} />
         <Route path="/oxygen_images_app/discover" component={Discover} />
         <Route path="/oxygen_images_app/gallery" component={Gallery} />
      </>
   )
}



export default Router