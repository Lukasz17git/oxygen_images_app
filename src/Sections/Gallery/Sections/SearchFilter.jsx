import SearchInput from "../Components/SearchInput"
import OrderBy from "../Components/OrderBy"


const SearchFilter = () => {
   return (
      <div className="frcc g-4 mt-24 mb-16">
         <SearchInput />
         <OrderBy />
      </div>
   )
}
export default SearchFilter