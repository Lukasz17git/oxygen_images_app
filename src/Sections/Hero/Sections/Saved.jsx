
import { useTypedSelector } from "../../../Store/store"
import ImagesSection from "../Components/ImagesSection"

const Saved = () => {
   const savedImages = useTypedSelector(store => store.app.savedImages.slice(0, 10))
   console.log(savedImages)
   return (
      <ImagesSection title='Recently Saved:'>

      </ImagesSection>
   )
}
export default Saved
