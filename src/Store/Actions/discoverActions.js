import { createSelectorFromStringPath, remove } from "maraj";
import { storeUpdate } from "../rootReducers";

export const saveSearchedImagesAction = (unsplashImages) => {
   return storeUpdate(() => ({
      ['app.searchedImages']: unsplashImages,
      ['app.lastSearchedImages']: c => {
         const imageToAdd = unsplashImages[0]
         if (c.find(img => img.id === imageToAdd.id)) return c
         const sliced = c.slice(0, 9)
         sliced.unshift(imageToAdd)
         return sliced
      }
   }))
}

export const clearSearchedImagesAction = () => storeUpdate({
   [`app.searchedImages`]: []
})

export const likeSearchedImageAction = (storePath) => storeUpdate((store) => {
   const image = createSelectorFromStringPath(storePath)(store)
   return {
      [`app.savedImages.${image.id}`]: image,
      ['app.lastSavedImages']: c => {
         if (c.find(img => img.id === image.id)) return c
         const sliced = c.slice(0, 9)
         sliced.unshift(image)
         return sliced
      }
   }
})

export const dislikeSearchedImageAction = (storePath) => storeUpdate((store) => {
   const imageId = createSelectorFromStringPath(storePath + '.id')(store)
   return {
      [`app.savedImages`]: remove(imageId)
   }
})

