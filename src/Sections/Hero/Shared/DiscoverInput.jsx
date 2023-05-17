
import { useLocation } from "wouter"
import BigInput from "../../../Components/BigInput"


const DiscoverInput = ({ initialValue = '' }) => {

   const [location, setLocation] = useLocation()
   const handleSearch = (value) => setLocation(value ? `discover/${value}/1` : `discover${location.slice(-1) === '/' ? '' : '/'}`)

   return <BigInput initialValue={initialValue} handleSearch={handleSearch} />
}
export default DiscoverInput