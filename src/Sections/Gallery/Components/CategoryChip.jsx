import { useDispatch } from "react-redux"
import ActionIcon from "../../../Components/ActionIcon"
import { removeOneCategoryFilterAction } from "../../../Store/Actions/galleryActions"
import { basePath } from "../../../../basePath"


const CategoryChip = ({ category, index }) => {
   const dispatch = useDispatch()
   const removeCategoryFilter = () => dispatch(removeOneCategoryFilterAction(index))

   return (
      <div className="frcc py-2 px-8 bg-grey-light br-400">
         <span className="blockmin-w-24 pr-4 pl-6 pb-1 tc">{category}</span>
         <ActionIcon
            className="w-20 h-20"
            src={`${basePath}CriticalIcons/remove-chip.svg`}
            iconClassName='w-14 h-14'
            onClick={removeCategoryFilter} />
      </div>
   )
}
export default CategoryChip