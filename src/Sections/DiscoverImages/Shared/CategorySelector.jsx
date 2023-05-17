import { useTypedSelector } from "../../../Store/store"
import { useDispatch } from "react-redux"
import { changeImageCategoryAction } from "../../../Store/Actions/imageActions"



const CategorySelector = ({ id }) => {
   const category = useTypedSelector(store => store.app.savedImages[id]?.category)
   const categories = useTypedSelector(store => store.app.categories)
   const dispatch = useDispatch()
   const selectCategory = (e) => dispatch(changeImageCategoryAction(id, e.target.value))

   return (
      <select
         className="pos-a l-8 t-8 h-32 w-160 br-8 px-4 bg-overlay"
         value={category ?? ''}
         onChange={selectCategory}
      >
         <option value=''>- category -</option>
         {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
         ))}
      </select>
   )
}
export default CategorySelector