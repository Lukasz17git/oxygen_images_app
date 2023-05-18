import { useEffect, useState } from "react"
import { useTypedSelector } from "../../../Store/store"
import SavedImage from "../../AppImage/SavedImage"
import NavigationGroup from "../../../Components/NavigationGroup"
import splitArrayEveryTwo from "../../../Utils/splitArrayEveryTwo"


const SavedImages = () => {
   const [{ page }, setPage] = useState({ page: 1 })

   const categoriesFilter = useTypedSelector(store => store.app.categoriesFilter)
   const searchInput = useTypedSelector(store => store.app.searchInput)
   const orderBy = useTypedSelector(store => store.app.orderBy)

   // probably i could memoize this selector, but in our case it wont be much difference
   // because there wont be that many other changes in store that are not related to
   // this selector once its rendered.
   const [imagesToRender, totalPages] = useTypedSelector(store => {
      const savedImages = store.app.savedImages //its an objectMap
      const validImages = []
      for (const savedImageId in savedImages) {
         const savedImage = savedImages[savedImageId]
         const category = savedImage.category
         const description = savedImage.alt_description
         if (!category && categoriesFilter.length) continue
         if (categoriesFilter.length && !categoriesFilter.includes(category)) continue
         if (!description || !description.includes(searchInput)) continue
         validImages.push(savedImage)
      }
      const orderedImages = orderSavedImages(validImages, orderBy)
      const imageAmmountPerPage = 10
      return [
         orderedImages.slice((page - 1) * imageAmmountPerPage, page * imageAmmountPerPage),
         Math.trunc((orderedImages.length - 1) / imageAmmountPerPage) + 1
      ]
   })

   const handleNavigation = (newValue) => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      console.log(newValue)
      setTimeout(() => setPage({ page: newValue }), 500)
   }

   console.log('rendered page', page)

   useEffect(() => {
      console.log('rendered effect')
      setPage(c => c.page === 1 ? c : { page: 1 })
   }, [categoriesFilter, searchInput, orderBy])

   const pairedImages = splitArrayEveryTwo(imagesToRender)

   return (
      <>
         <div className="fc g-8 md:g-16">
            {pairedImages.map((pairOfImages, index) => (
               <div key={index} className="fc sm:frca g-8 md:g-16">
                  {pairOfImages.map(image => (
                     <SavedImage key={image.id} image={image} />
                  ))}
               </div>
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