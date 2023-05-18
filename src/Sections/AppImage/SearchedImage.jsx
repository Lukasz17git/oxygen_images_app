import { useState } from "react"
import { useTypedSelector } from "../../Store/store"
import InfoLayer from "./Components/InfoLayer"
import CategorySelector from "./Components/CategorySelector"
import Info from "./Components/Info"
import Download from "./Components/Download"
import Like from "./Components/Like"
import { createSelectorFromStringPath } from "maraj"
import AppImage from "./__Base__/AppImage"


const SearchedImage = ({ storePath, className = '' }) => {

   const [showInfo, setShowInfo] = useState(false)
   const searchedImage = useTypedSelector(createSelectorFromStringPath(storePath))
   const { id, alt_description, created_at, likes, width, height, smallUri, bigUri } = searchedImage

   const isImageSaved = useTypedSelector(store => !!store.app.savedImages[id])

   return (
      <AppImage className={className} smallUri={smallUri} bigUri={bigUri} alt_description={alt_description}>
         {!showInfo ? <>
            {isImageSaved && <CategorySelector id={id} />}
            <div className="pos-a t-8 r-8 frcc g-8">
               <Download id={id} downloadImageUri={bigUri} />
               <Like isLiked={isImageSaved} storePath={storePath} />
            </div>
         </> : <InfoLayer
            id={id}
            created_at={created_at}
            likes={likes}
            width={width}
            height={height}
            description={alt_description}
         />}
         <Info showInfo={showInfo} setShowInfo={setShowInfo} />
      </AppImage>
   )
}

export default SearchedImage