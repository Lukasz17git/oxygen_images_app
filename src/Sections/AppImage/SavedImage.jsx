import { useState } from "react"
import InfoLayer from "./Components/InfoLayer"
import Info from "./Components/Info"
import Download from "./Components/Download"
import CategorySelector from "./Components/CategorySelector"
import DeleteImage from "./Components/DeleteImage"
import EditImage from "./Components/EditImage"
import CategoryImageChip from "./Components/Chip"
import EditLayer from "./Components/EditLayer"
import DescriptionEdit from "./Components/DescriptionEdit"
import AppImage from "./__Base__/AppImage"


const SavedImage = ({ image, className = '' }) => {

   const [showInfo, setShowInfo] = useState(false)
   const [edit, setEdit] = useState(false)
   const { id, alt_description, created_at, likes, width, height, smallUri, bigUri, category } = image

   return (
      <AppImage className={className} smallUri={smallUri} bigUri={bigUri} alt_description={alt_description}>
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
      </AppImage>
   )
}
export default SavedImage