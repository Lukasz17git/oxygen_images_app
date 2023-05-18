import { useTypedSelector } from "../../../Store/store"
import SearchedImage from "../../AppImage/SearchedImage"
// import Image from "../Components/Image"
import ImagesSection from "../Components/ImagesSection"


const LastSearchedImages = () => {
   const recentlySearchedValues = useTypedSelector(store => store.app.lastSearchedImages)

   return (
      <ImagesSection title='Recently Searched:'>
         {recentlySearchedValues.map((_, index) => (
            <SearchedImage key={index} className="flex-shrink-0 h-100%" storePath={`app.lastSearchedImages.${index}`} />
         ))}
      </ImagesSection>
   )
}
export default LastSearchedImages
