import { Route, Router as RouterWrapper } from "wouter"
import Hero from "../Sections/Hero/Hero"
import Discover from "../Sections/DiscoverImages/Discover"
import Gallery from "../Sections/Gallery/Gallery"
import { basePath } from "../../basePath"



const Router = () => {
   return (
      <RouterWrapper base={basePath}>
         <Route path="" component={Hero} />
         <Route path="discover/:search/:page" component={Discover} />
         <Route path="discover" component={Discover} />
         <Route path="gallery" component={Gallery} />
      </RouterWrapper>
   )
}



export default Router