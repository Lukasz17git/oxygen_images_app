import { useTypedSelector } from "../../../Store/store"
import ImagesSection from "../Components/ImagesSection"


const Searched = () => {
   const recentlySearchedValues = useTypedSelector(store => store.app.searchedValues.slice(0, 10))
   console.log(recentlySearchedValues)

   return (
      <ImagesSection title='Recently Searched:'>

      </ImagesSection>
   )
}
export default Searched