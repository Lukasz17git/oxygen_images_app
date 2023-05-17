import CategoriesFilter from './Sections/CategoriesFilter'
import SearchFilter from './Sections/SearchFilter'
import SavedImages from './Sections/SavedImages'

const Gallery = () => {
   return (
      <section>
         <h2 className="fccc mt-70 mb-16 g-8 ts-40 ls-2">Gallery</h2>
         <CategoriesFilter />
         <SearchFilter />
         <SavedImages />
      </section>
   )
}
export default Gallery