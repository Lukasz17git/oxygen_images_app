import CategorySettingsButton from "../Components/CategorySettingsButton"
import CategoryFilter from "../Components/CategoryFilter"
import { useTypedSelector } from "../../../Store/store"
import CategoryChip from "../Components/CategoryChip"


const CategoriesFilter = () => {
   const selectedCategoriesFilter = useTypedSelector(store => store.app.categoriesFilter)
   return (
      <>
         <div className="frcc g-4">
            <CategorySettingsButton />
            <CategoryFilter selectedCategoriesFilter={selectedCategoriesFilter} />
         </div>
         <div className="fw g-4 py-8 sm:px-6">
            {selectedCategoriesFilter.map((selectedCategory, index) => (
               <CategoryChip key={selectedCategory} category={selectedCategory} index={index} />
            ))}
         </div>
      </>
   )
}
export default CategoriesFilter