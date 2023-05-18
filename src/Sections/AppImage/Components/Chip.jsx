

const Chip = ({ category }) => {
   return (
      <div className="pos-a t-8 l-8 h-32 frcc br-10 px-10 bg-overlay max-w-[70%] tw oh">
         <b className="tc-main">{category || 'No Category'}</b>
      </div>
   )
}
export default Chip