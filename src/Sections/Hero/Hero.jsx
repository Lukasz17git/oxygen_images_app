import LastSearchedImages from "./Sections/LastSearchedImages"
import LastSavedImages from "./Sections/LastSavedImages"
import LastRemovedImages from "./Sections/LastRemovedImages"
import DiscoverInput from "../../ComponentsShared/DiscoverInput"


const Hero = () => {
   return (
      <section>
         <h1 className="fccc mt-48 g-8">
            <span className="ts-40 ls-2 tc-main-light">Discover</span>
            <strong className="ts-60 ls-3 tc-complementary">Images<b className="w-4 iblock">.</b></strong>
         </h1>
         <div className="py-64 pb-58 lg:py-96 frcc g-4">
            <DiscoverInput />
         </div>
         <LastSearchedImages />
         <LastSavedImages />
         <LastRemovedImages />
      </section>
   )
}
export default Hero