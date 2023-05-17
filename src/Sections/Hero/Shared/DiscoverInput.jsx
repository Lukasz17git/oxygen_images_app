
import { useLocation } from "wouter"
import BigInput from "../../../Components/BigInput"


const DiscoverInput = ({ initialValue = '' }) => {

   const [, setLocation] = useLocation()
   const handleSearch = (value) => setLocation(value ? `/discover/${value}/1` : '/discover')

   return <BigInput initialValue={initialValue} handleSearch={handleSearch} />
}
export default DiscoverInput