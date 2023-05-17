import { remove, spread } from "maraj"
import { storeUpdate } from "../rootReducers"


export const addCategoryToCategoriesModalAction = (newCategory) => storeUpdate({
   ['modal.data']: spread([newCategory])
})

export const editCategoryFromCategoriesModalAction = (index, value) => storeUpdate({
   [`modal.data.${index}`]: value
})

export const deleteCategoryFromCategoriesModalAction = (index) => storeUpdate({
   ['modal.data']: remove(index)
})
