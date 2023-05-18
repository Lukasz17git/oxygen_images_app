import { useState } from "react"
import Input from "../../../Components/Input"
import ActionIcon from "../../../Components/ActionIcon"
import { useDispatch } from "react-redux"
import { addCategoryToCategoriesModalAction } from "../../../Store/Actions/categoriesModalActions"
import { setNewErrorAction } from "../../../Store/Actions/errorActions"
import { fieldErrorsText, locationErrorsText, typeErrorsText } from "../../../Errors/errorList"
import { basePath } from "../../../../basePath"

const NewCategory = ({ getModalData }) => {
   
   const [value, setValue] = useState('')

   const dispatch = useDispatch()

   const addNewCategory = () => {
      if (!value) return
      dispatch((dispatch, getState) => {
         const categories = getModalData(getState)
         if (categories.includes(value)) return dispatch(setNewErrorAction(locationErrorsText.categories, fieldErrorsText.category, typeErrorsText.alreadyExist))
         dispatch(addCategoryToCategoriesModalAction(value))
         setValue('')
      })
   }
   const handleEnterKeyPress = (e) => e.key === 'Enter' && addNewCategory()

   return (
      <div className="frcc g-8">
         <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label='New Category'
            placeholder='animals'
            onKeyDown={handleEnterKeyPress}
            className="flex-1 !h-40"
            inputClassName='!bw-0 !bbw-2'
         />
         <ActionIcon
            className="w-40 h-40 br-5 bg-grey-light"
            src={`${basePath}CriticalIcons/add.svg`}
            iconClassName='w-20 h-20'
            onClick={addNewCategory} />
      </div>
   )
}
export default NewCategory