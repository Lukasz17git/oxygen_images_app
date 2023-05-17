import { storeUpdate } from "../rootReducers"


export const changeImageCategoryAction = (imageId, newCategory) => storeUpdate({
   [`app.savedImages.${imageId}.category`]: newCategory
})

export const changeImageDescriptionAction = (imageId, newValue) => storeUpdate({
   [`app.savedImages.${imageId}.alt_description`]: newValue
})

