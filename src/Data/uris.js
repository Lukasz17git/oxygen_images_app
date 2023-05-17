const clientId = 'uTk_91a-2LDhlb2FBH8zfDhBq_1yxxBZ-Hl2K4Q2WM4'

export const fetchConfig = {
   headers: {
      'Authorization': `Client-ID ${clientId}`
   }
}

export const searchImagesUri = (searchValue, page) => `https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}`