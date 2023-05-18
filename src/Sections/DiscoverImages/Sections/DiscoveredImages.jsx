import { useTypedSelector } from "../../../Store/store"
import splitArrayEveryTwo from "../../../Utils/splitArrayEveryTwo"
import SearchedImage from "../../AppImage/SearchedImage"


const DiscoveredImages = () => {

   const searchedImagesLength = useTypedSelector(store => store.app.searchedImages.length)
   const arrayHolder = Array(searchedImagesLength).fill()
   const pairedImagesArrayHolder = splitArrayEveryTwo(arrayHolder)

   return (
      <div className="fc g-8 md:g-16">
         {pairedImagesArrayHolder.map((pairOfImages, pairIndex) => (
            <div key={pairIndex} className="fc sm:frca g-8 md:g-16">
               {pairOfImages.map((_, index) => (
                  <SearchedImage key={index} storePath={`app.searchedImages.${pairIndex * 2 + index}`} />
               ))}
            </div>
         ))}
      </div>
   )
}
export default DiscoveredImages
