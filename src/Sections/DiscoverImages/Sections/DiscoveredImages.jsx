import { useTypedSelector } from "../../../Store/store"
import SearchedImage from "../Components/SearchedImage"


const DiscoveredImages = () => {

   const searchedImagesLength = useTypedSelector(store => store.app.searchedImages.length)
   const arrayHolder = Array(searchedImagesLength).fill()

   return (
      <div className="gcc grid-cols-1 md:grid-cols-2 g-8">
         {arrayHolder.map((_, index) => (
            <SearchedImage key={index} index={index} />
         ))}
      </div>
   )
}
export default DiscoveredImages