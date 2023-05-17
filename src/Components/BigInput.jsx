import { useState } from "react"
import ActionIcon from "./ActionIcon"
import Input from "./Input"


const BigInput = ({ initialValue = '', handleSearch }) => {

   const [value, setValue] = useState(initialValue)
   const handleInput = (e) => setValue(e.target.value)

   const handleKeyDown = (e) => e.key === 'Enter' && handleSearch(value)

   return (
      <>
         <Input
            value={value}
            onChange={handleInput}
            label='Discover Images'
            placeholder='Mountains'
            className='w-344'
            inputClassName='!bw-3 br-5'
            onKeyDown={handleKeyDown}
         />
         <ActionIcon
            src="/CriticalIcons/search.svg"
            className="br-4 bg-main-light h-40 w-40 fs0 f:oc-on-focus"
            iconClassName="h-24 w-24"
            onClick={() => handleSearch(value)} />
      </>
   )
}
export default BigInput