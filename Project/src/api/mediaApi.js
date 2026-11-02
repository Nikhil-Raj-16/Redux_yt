import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export async function fetchPhotos(query,page=1,per_page =20){
    // console.log("My API Key:", import.meta.env.VITE_UNSPLASH_KEY) // if Vite
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    // console.log(res);
    return res.data
    
}

export async function fetchVideos(query,page=1,per_page=15){
    const res = await axios.get(`https://pixabay.com/api/videos/`,{
        params:{
            key:PIXABAY_KEY,
            q:query,
            page:page,
            per_page:per_page
            }    
        });
    return res.data
}

export async function fetchGifs(query, limit = 20, offset = 0) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIPHY_KEY,
      q: query,
      limit,
      offset,
      rating: "g", // Optional content rating (g, pg, pg-13, r)
    },
  });
  return res.data;
}
