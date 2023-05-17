import { useTypedSelector } from "../../../Store/store"
import Image from "../Components/Image"
import ImagesSection from "../Components/ImagesSection"


const LastRemovedImages = () => {

   const removedImages = useTypedSelector(store => store.app.lastRemovedImages)

   return (
      <ImagesSection title='Last Removed:'>
         {removedImages.map(image => (
            <Image image={image} key={image.id} />
         ))}
      </ImagesSection>
   )
}
export default LastRemovedImages