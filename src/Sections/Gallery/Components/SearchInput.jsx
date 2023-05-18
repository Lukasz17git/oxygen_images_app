import { useDispatch } from "react-redux"
import BigInput from "../../../Components/BigInput"
import { setGalleryFilterAction } from "../../../Store/Actions/galleryActions"
import { useTypedSelector } from "../../../Store/store"


const SearchInput = () => {

   const searchInput = useTypedSelector(store => store.app.searchInput)

   const dispatch = useDispatch()
   const handleSearch = (value) => dispatch(setGalleryFilterAction(value))

   return <BigInput initialValue={searchInput} handleSearch={handleSearch} label="Search by description" placeholder="heart" />
}

export default SearchInput