

const InfoLayer = ({ id, created_at, likes, width, height, description }) => {
   return (
      <div className="bg-grey-light bgo-80 p-16 py-20 pos-r w-100% h-100% br-16">
         <InfoRow label='Id' text={id} />
         <InfoRow label='Created date' text={created_at.slice(0, 10)} />
         <InfoRow label='Likes' text={likes} />
         <InfoRow label='Width' text={width + 'px'} />
         <InfoRow label='Height' text={height + 'px'} />
         <InfoRow label='Description' text={description} />
      </div>
   )
}
export default InfoLayer

const InfoRow = ({ label, text }) => {
   return (
      <div className="fr g-8 min-h-28 bc-white bo-30 bw-0 btw-1 last:bbw-1">
         <b className="tw tf-extrabold">{label + ":"}</b>
         <span>{text}</span>
      </div>
   )
}