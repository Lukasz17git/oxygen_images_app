import { useState } from "react"
import { useTypedSelector } from "../../../Store/store"
import InfoLayer from "../Shared/InfoLayer"
import CategorySelector from "../Shared/CategorySelector"
import Info from "../Shared/Info"
import Download from "../Shared/Download"
import Like from "./Like"


const SearchedImage = ({ index }) => {

   const [showInfo, setShowInfo] = useState(false)
   const searchedImage = useTypedSelector(store => store.app.searchedImages[index])
   const { id, alt_description, liked, created_at, likes, width, height, smallUri, bigUri } = searchedImage

   return (
      <div className="pos-r">
         <img
            className="block max-w-100% max-h-[960px] br-16 s-modal"
            src={smallUri}
            srcSet={`${bigUri} 700w, ${smallUri} 400w`}
            loading="lazy"
            alt={alt_description} />
         <div className="pos-a l-0 t-0 w-100% h-100% p-4 z-1 animate-fade animate-duration-400 animate-delay-200">
            {!showInfo ? <>
               {liked && <CategorySelector id={id} />}
               <div className="pos-a t-8 r-8 frcc g-8">
                  <Download id={id} downloadImageUri={bigUri} />
                  <Like isLiked={liked} imageIndex={index} />
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
         </div>
      </div>
   )
}

export default SearchedImage