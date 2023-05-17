import { useState } from "react"
import { useTypedSelector } from "../../../Store/store"
import SavedImage from "../Components/SavedImage"
import NavigationGroup from "../../DiscoverImages/Sections/NavigationGroup"


const SavedImages = () => {
   const [page, setPage] = useState(1)
   //filters
   const categoriesFilter = useTypedSelector(store => store.app.categoriesFilter)
   const searchInput = useTypedSelector(store => store.app.searchInput)
   const orderBy = useTypedSelector(store => store.app.orderBy)
   const [imagesToRender, totalPages] = useTypedSelector(store => {
      const savedImages = store.app.savedImages //its an objectMap
      const validImages = []
      for (const savedImageId in savedImages) {
         const savedImage = savedImages[savedImageId]
         const category = savedImage.category
         const description = savedImage.alt_description
         if (category && categoriesFilter.length && !categoriesFilter.includes(category)) continue
         if (!description.includes(searchInput)) continue
         validImages.push(savedImage)
      }
      const orderedImages = orderSavedImages(validImages, orderBy)
      const imageAmmountPerPage = 10
      return [
         orderedImages.slice((page - 1) * imageAmmountPerPage, page * imageAmmountPerPage),
         Math.trunc(orderedImages.length / imageAmmountPerPage) + 1
      ]
   })

   const handleNavigation = (newValue) => {
      setPage(newValue)
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }
   console.log(totalPages)

   return (
      <>
         <div className="gcc grid-cols-1 md:grid-cols-2 g-8">
            {imagesToRender.map(image => (
               <SavedImage key={image.id} image={image} />
            ))}
         </div>
         {totalPages > 1 && <NavigationGroup page={page} totalPages={totalPages} onClickNavigation={handleNavigation} />}
      </>
   )
}

export default SavedImages

const orderSavedImages = (savedImages, orderBy) => {
   const [property, direction] = orderBy.split('-')
   const directionMultiplier = direction === 'max' ? -1 : 1
   const sortedImages = savedImages.toSorted((a, b) => a[property] > b[property] ? 1 * directionMultiplier : -1 * directionMultiplier)
   return sortedImages
}