import { useTypedSelector } from "../../../Store/store"
import ImagesSection from "../Components/ImagesSection"


const Deleted = () => {

   const removedImages = useTypedSelector(store => store.app.removedImages)
   console.log(removedImages)
   return (
      <ImagesSection title='Last Removed:'>

      </ImagesSection>
   )
}
export default Deleted