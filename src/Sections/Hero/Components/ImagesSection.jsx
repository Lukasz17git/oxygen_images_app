

const ImagesSection = ({ children, title }) => {
   return (
      <section>
         <h2 className="ts-24 tc-main">{title}</h2>
         <div className="fr oxa g-4 p-4 h-360 mt-4 mb-32">
            {children}
         </div>
      </section>
   )
}

export default ImagesSection