
import { useTypedSelector } from "../../../Store/store"
import Image from "../Components/Image"
import ImagesSection from "../Components/ImagesSection"

const LastSavedImages = () => {
   const savedImages = useTypedSelector(store => store.app.lastSavedImages)

   return (
      <ImagesSection title='Recently Saved:'>
         {savedImages.map(image => (
            <Image image={image} key={image.id} />
         ))}
      </ImagesSection>
   )
}
export default LastSavedImages