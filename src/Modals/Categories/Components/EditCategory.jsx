import { createSelectorFromStringPath } from "maraj"
import { useTypedSelector } from "../../../Store/store"
import { deleteCategoryFromCategoriesModalAction } from "../../../Store/Actions/categoriesModalActions"
import { editCategoryFromCategoriesModalAction } from "../../../Store/Actions/categoriesModalActions"
import Input from "../../../Components/Input"
import ActionIcon from "../../../Components/ActionIcon"
import { useDispatch } from "react-redux"
import { basePath } from "../../../../basePath"


const EditCategory = ({ modalDataPath, index }) => {

   const fullPath = `${modalDataPath}.${index}`
   const value = useTypedSelector(createSelectorFromStringPath(fullPath))

   const dispatch = useDispatch()
   const editCategory = (e) => dispatch(editCategoryFromCategoriesModalAction(index, e.target.value))
   const deleteCategory = () => dispatch(deleteCategoryFromCategoriesModalAction(index))

   return (
      <div className="frcc g-8">
         <Input
            value={value}
            onChange={editCategory}
            label='New Category'
            placeholder='animals'
            className="flex-1 !h-40 bc-grey-dark br-4"
            inputClassName='!bw-0 !bg-grey-light !bgo-5 br-4 !tc-main-dark'
            labelClassName='none'
         />
         <ActionIcon
            className="w-40 h-40 br-5 bg-grey-light"
            src={`${basePath}CriticalIcons/delete-category.svg`}
            iconClassName='w-20 h-20'
            onClick={deleteCategory} />
      </div>
   )
}
export default EditCategory