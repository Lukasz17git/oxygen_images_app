
import { useTypedSelector } from "../../../Store/store"
import SearchedImage from "../../AppImage/SearchedImage"
import ImagesSection from "../Components/ImagesSection"

const LastSavedImages = () => {
   const savedImages = useTypedSelector(store => store.app.lastSavedImages)

   return (
      <ImagesSection title='Recently Saved:'>
         {savedImages.map((_, index) => (
            <SearchedImage key={index} className="flex-shrink-0 h-100%" storePath={`app.lastSavedImages.${index}`} />
         ))}
      </ImagesSection>
   )
}
export default LastSavedImages