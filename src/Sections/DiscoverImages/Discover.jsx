
import { useEffect, useState } from "react"
import DiscoverInput from "../Hero/Shared/DiscoverInput"
import DiscoveredImages from "./Sections/DiscoveredImages"
import useDispatchErrorWrappedThunk from "../../Hooks/useDispatchErrorWrappedThunk"
import { fetchConfig, searchImagesUri, searchRandomUri } from "../../Data/uris"
import { clearSearchedImagesAction, saveSearchedImagesAction } from "../../Store/Actions/discoverActions"
import NavigationGroup from "./Sections/NavigationGroup"
import { useLocation } from "wouter"

const Discover = ({ params }) => {

   const [totalPages, setTotalPages] = useState(1)

   const valueToSearch = params.search && decodeURIComponent(params.search)
   const page = params.page || 1

   const { dispatch, dispatchErrorWrappedThunk } = useDispatchErrorWrappedThunk()
   useEffect(() => {

      let isStillValidForAsyncTask = true

      dispatchErrorWrappedThunk(async (dispatch, getState) => {
         const res = await fetch(!valueToSearch ? searchRandomUri() : searchImagesUri(valueToSearch, page), fetchConfig)
         const data = await res.json()
         if (!isStillValidForAsyncTask) return
         const { results, total_pages } = !valueToSearch ? { results: data, total_pages: 1 } : data //different response for random uri
         const savedImages = getState().app.savedImages
         for (const image of results) {
            if (savedImages[image.id]) image.liked = true
         }
         const reducedResults = results.map(({ urls, id, alt_description, created_at, likes, width, height, liked }) => (
            { id, alt_description, created_at, likes, width, height, smallUri: urls.small, bigUri: urls.regular, liked }
         ))
         dispatch(saveSearchedImagesAction(reducedResults))
         setTotalPages(total_pages)
      })

      return () => isStillValidForAsyncTask = false

   }, [page, valueToSearch, params])


   const [, setLocation] = useLocation()
   const handleNavigation = (value) => {
      setLocation(`discover/${valueToSearch}/${value}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   //cleanup the store
   useEffect(() => {
      return () => dispatch(clearSearchedImagesAction())
   }, [dispatch])

   return (
      <section>
         <h2 className="fccc mt-70 g-8 ts-40 ls-2">Discover</h2>
         <div className="py-48 frcc g-4">
            <DiscoverInput initialValue={valueToSearch} />
         </div>
         <DiscoveredImages />
         {valueToSearch && <NavigationGroup page={page} totalPages={totalPages} onClickNavigation={handleNavigation} />}
      </section>
   )
}
export default Discover