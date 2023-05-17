import ActionIcon from "../../../Components/ActionIcon"


const Info = ({ showInfo, setShowInfo }) => {
   return (
      <ActionIcon
         className="br-100% w-32 h-32 bg-overlay pos-a b-8 r-8 z-1"
         src={`/CriticalIcons/${showInfo ? 'close' : 'info'}.svg`}
         iconClassName='w-18 h-18'
         onClick={() => setShowInfo(c => !c)}
      />
   )
}
export default Info