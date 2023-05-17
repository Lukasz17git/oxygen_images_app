import { useTypedSelector } from "../../../Store/store"
import Image from "../Components/Image"
import ImagesSection from "../Components/ImagesSection"


const LastSearchedImages = () => {
   const recentlySearchedValues = useTypedSelector(store => store.app.lastSearchedImages)

   return (
      <ImagesSection title='Recently Searched:'>
         {recentlySearchedValues.map(image => (
            <Image image={image} key={image.id} />
         ))}
      </ImagesSection>
   )
}
export default LastSearchedImages
