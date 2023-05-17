import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material"
import { useTypedSelector } from "../../../Store/store"
import { useDispatch } from "react-redux";
import { setGalleryCategoriesFilterAction } from "../../../Store/Actions/galleryActions";


const CategoryFilter = ({ selectedCategoriesFilter }) => {
   const categories = useTypedSelector(store => store.app.categories)
   const label = selectedCategoriesFilter.length ? 'Categories' : 'All Categories'

   const dispatch = useDispatch()

   const handleChange = (e) => dispatch(setGalleryCategoriesFilterAction(e.target.value))

   return (
      <div>
         <FormControl size='small' sx={{ minWidth: '12rem', maxWidth: '16rem', '.Mui-focused': { color: 'rgba(0, 0, 0, 0.6) !important' } }}>
            <InputLabel id="categories-gallery-filter" >{label}</InputLabel>
            <Select
               variant="standard"
               sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' }, borderRadius: "0.25rem" }}
               className="bg-grey-light"
               labelId="categories-gallery-filter"
               multiple
               value={selectedCategoriesFilter}
               onChange={handleChange}
               input={<OutlinedInput label={label} />}
               renderValue={(selected) => selected.join(', ')}
               MenuProps={{
                  PaperProps: {
                     style: {
                        maxHeight: "40vh",
                        width: "12rem",
                     },
                  },
               }}
            >
               {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                     <Checkbox checked={selectedCategoriesFilter.indexOf(category) > -1} />
                     <ListItemText primary={category} />
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   )
}

export default CategoryFilter