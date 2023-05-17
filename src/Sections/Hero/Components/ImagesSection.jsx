

const ImagesSection = ({ children, title }) => {
   return (
      <section>
         <h2 className="ts-24 tc-main">{title}</h2>
         <div className="frc oxa g-4 p-4 h-320">
            {children}
         </div>
      </section>
   )
}
export default ImagesSection