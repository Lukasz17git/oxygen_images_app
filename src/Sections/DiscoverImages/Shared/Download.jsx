import ActionIcon from "../../../Components/ActionIcon"
import { fetchConfig } from "../../../Data/uris"


const Download = ({ downloadImageUri, id }) => {

   const downloadImage = async () => {
      const res = await fetch(downloadImageUri, fetchConfig)
      const blob = await res.blob()
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `${id.slice(0, 60)}.jfif`
      link.click()
   }

   return (
      <ActionIcon
         className="br-100% w-32 h-32 bg-overlay"
         src="/CriticalIcons/download.svg"
         iconClassName='w-20 h-20'
         onClick={downloadImage} />
   )
}

export default Download
