

const CategoryImageChip = ({ category }) => {
   return (
      <div className="pos-a t-8 l-8 h-32 frcc br-12 px-10 bg-overlay max-w-[70%] tw oh">
         <b>{category || 'All Categories'}</b>
      </div>
   )
}
export default CategoryImageChip