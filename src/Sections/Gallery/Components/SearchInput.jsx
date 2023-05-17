import { useDispatch } from "react-redux"
import BigInput from "../../../Components/BigInput"
import { setGalleryFilterAction } from "../../../Store/Actions/galleryActions"


const SearchInput = () => {

   const dispatch = useDispatch()
   const handleSearch = (value) => dispatch(setGalleryFilterAction(value))

   return <BigInput handleSearch={handleSearch} />
}

export default SearchInput