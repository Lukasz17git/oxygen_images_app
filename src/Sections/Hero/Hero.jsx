import { useState } from "react"
import ActionIcon from "../../Components/ActionIcon"
import { useLocation } from "wouter"
import Input from "../../Components/Input"
import Searched from "./Sections/Searched"
import Saved from "./Sections/Saved"
import Deleted from "./Sections/Deleted"


const Hero = () => {

   const [, setLocation] = useLocation()

   const [value, setValue] = useState('')
   const handleInput = (e) => setValue(e.target.value)

   const handleSearch = () => setLocation(value ? `/discover/${value}` : '/discover')

   return (
      <section>
         <h1 className="fccc mt-72 g-8">
            <span className="ts-40 ls-2">Discover</span>
            <strong className="ts-60 ls-3 tc-complementary">Images<b className="pos-a">.</b></strong>
         </h1>
         <div className="py-48 mt-48 frcc g-4">
            <Input
               value={value}
               onChange={handleInput}
               label='Discover Images'
               placeholder='Mountains'
               className='w-344'
               inputClassName='!bw-3 br-5'
            />
            <ActionIcon
               src="/CriticalIcons/search.svg"
               className="br-4 bg-main-light h-40 w-40 fs0"
               iconClassName="h-24 w-24"
               onClick={handleSearch} />
         </div>
         <Searched />
         <Saved />
         <Deleted />
      </section>
   )
}
export default Hero