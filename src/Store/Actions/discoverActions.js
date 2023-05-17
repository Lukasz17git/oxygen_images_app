import { remove } from "maraj";
import { storeUpdate } from "../rootReducers";


export const saveSearchedImagesAction = (unsplashImages) => {
   console.log(unsplashImages)
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


export const likeSearchedImageAction = (imageIndex) => storeUpdate((store) => {
   const image = store.app.searchedImages[imageIndex]
   return {
      [`app.searchedImages.${imageIndex}.liked`]: true,
      [`app.savedImages.${image.id}`]: image,
      ['app.lastSavedImages']: c => {
         if (c.find(img => img.id === image.id)) return c
         const sliced = c.slice(0, 9)
         sliced.unshift(image)
         return sliced
      }
   }
})


export const dislikeSearchedImageAction = (imageIndex) => storeUpdate((store) => {
   const imageId = store.app.searchedImages[imageIndex].id
   return {
      [`app.searchedImages.${imageIndex}.liked`]: false,
      [`app.savedImages`]: remove(imageId)
   }
})

