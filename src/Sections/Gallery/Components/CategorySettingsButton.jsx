import { useDispatch } from "react-redux"
import { openCategoriesModalAction } from "../../../Store/Actions/modalActions"
import ActionIcon from "../../../Components/ActionIcon"
import { basePath } from "../../../../basePath"


const CategorySettingsButton = () => {
   const dispatch = useDispatch()
   const openCategoryModal = () => dispatch(openCategoriesModalAction())
   return (
      <ActionIcon
         className="w-36 h-36 br-5 bg-grey-light"
         src={`${basePath}CriticalIcons/category-settings.svg`}
         iconClassName='w-20 h-20'
         onClick={openCategoryModal} />
   )
}
export default CategorySettingsButton