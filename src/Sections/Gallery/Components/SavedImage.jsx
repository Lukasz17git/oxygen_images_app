import { useState } from "react"
import InfoLayer from "../../DiscoverImages/Shared/InfoLayer"
import Info from "../../DiscoverImages/Shared/Info"
import Download from "../../DiscoverImages/Shared/Download"
import CategorySelector from "../../DiscoverImages/Shared/CategorySelector"
import DeleteImage from "./DeleteImage"
import EditImage from "./EditImage"
import CategoryImageChip from "./CategoryImageChip"
import EditLayer from "./EditLayer"
import DescriptionEdit from "./DescriptionEdit"


const SavedImage = ({ image }) => {
   
   const [showInfo, setShowInfo] = useState(false)
   const [edit, setEdit] = useState(false)
   const { id, alt_description, created_at, likes, width, height, smallUri, bigUri, category } = image

   return (
      <div className="pos-r w-fit h-fit max-w-100% max-h-100%">
         <img
            className="block max-w-100% max-h-544 object-contain br-16 s-modal"
            src={smallUri}
            srcSet={`${bigUri} 700w, ${smallUri} 400w`}
            loading="lazy"
            alt={alt_description} />
         <div className="pos-a l-0 t-0 w-100% h-100% p-4 z-1">
            {edit && <EditLayer />}
            {!showInfo ?
               <>
                  {edit ? <CategorySelector id={id} /> : <CategoryImageChip category={category} />}
                  <div className="pos-a t-8 r-8 frcc g-8">
                     {edit && <DeleteImage imageId={id} />}
                     <Download id={id} downloadImageUri={bigUri} />
                     <EditImage edit={edit} setEdit={setEdit} />
                  </div>
               </>
               :
               <InfoLayer
                  id={id}
                  created_at={created_at}
                  likes={likes}
                  width={width}
                  height={height}
                  description={alt_description}
               />
            }
            {edit
               ? <DescriptionEdit imageId={id} description={alt_description} />
               : <Info showInfo={showInfo} setShowInfo={setShowInfo} />}
         </div>
      </div>
   )
}
export default SavedImage