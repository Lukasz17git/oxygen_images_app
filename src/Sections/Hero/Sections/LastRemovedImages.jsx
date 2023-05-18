import { useTypedSelector } from "../../../Store/store"
import SearchedImage from "../../AppImage/SearchedImage"
import ImagesSection from "../Components/ImagesSection"


const LastRemovedImages = () => {

   const removedImages = useTypedSelector(store => store.app.lastRemovedImages)
   //check if exists already in store

   return (
      <ImagesSection title='Last Removed:'>
         {removedImages.map((_, index) => (
            <SearchedImage key={index} className="flex-shrink-0 h-100%" storePath={`app.lastRemovedImages.${index}`} />
         ))}
      </ImagesSection>
   )
}
export default LastRemovedImages