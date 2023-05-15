

const ImagesSection = ({ children, title }) => {
   return (
      <section>
         <h2>{title}</h2>
         <div>
            {children}
         </div>
      </section>
   )
}
export default ImagesSection