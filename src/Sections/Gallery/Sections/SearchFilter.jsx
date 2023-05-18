import SearchInput from "../Components/SearchInput"
import OrderBy from "../Components/OrderBy"


const SearchFilter = () => {
   return (
      <div className="frcc g-4 my-24 px-2 md:max-w-[86%] m-a">
         <SearchInput />
         <OrderBy />
      </div>
   )
}
export default SearchFilter