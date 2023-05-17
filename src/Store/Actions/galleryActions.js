import { remove, spread } from "maraj";
import { storeUpdate } from "../rootReducers";


export const setGalleryFilterAction = (value) => storeUpdate({
   [`app.searchInput`]: value
})

export const setGalleryCategoriesFilterAction = (value) => {
   console.log(value)
   return storeUpdate({
      [`app.categoriesFilter`]: typeof value === 'string' ? value.split(',') : value
   })
}

export const removeOneCategoryFilterAction = (index) => storeUpdate({
   ['app.categoriesFilter']: remove(index)
})

export const selectOrderByAction = (value) => storeUpdate({
   ['app.orderBy']: value
})

export const saveCategoryChangesAction = () => storeUpdate(store => {
   const newCategories = store.modal.data
   const savedImages = store.app.savedImages
   const savedImagesWithInvalidCategories = {}
   for (const savedImageId in savedImages) {
      const savedImage = savedImages[savedImageId]
      const category = savedImage.category
      if (!category || newCategories.includes(category)) continue
      savedImagesWithInvalidCategories[savedImageId] = { ...savedImage, category: '' }
   }
   return {
      ['app.categories']: store.modal.data,
      ['app.savedImages']: spread(savedImagesWithInvalidCategories)
   }
})


export const removeImageFromGalleryAction = (imageId) => storeUpdate(store => ({
   [`app.savedImages`]: remove(imageId),
   ['app.lastRemovedImages']: c => {
      if (c.find(img => img.id === imageId)) return c
      const sliced = c.slice(0, 9)
      sliced.unshift(store.app.savedImages[imageId])
      return sliced
   }
}))