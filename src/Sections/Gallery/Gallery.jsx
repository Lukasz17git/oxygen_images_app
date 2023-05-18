import CategoriesFilter from './Sections/CategoriesFilter'
import SavedImages from './Sections/SavedImages'
import SearchInput from './Components/SearchInput'
import OrderBy from './Components/OrderBy'

const Gallery = () => {
   return (
      <section>
         <h2 className="fccc mt-48 mb-16 g-8 ts-40 ls-2 tc-main-light">Gallery</h2>
         <CategoriesFilter />
         <div className="frcc g-4 my-24 px-2 md:px-6 m-a">
            <SearchInput />
            <OrderBy />
         </div>
         <SavedImages />
      </section>
   )
}
export default Gallery