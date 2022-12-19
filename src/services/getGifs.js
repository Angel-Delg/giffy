export const getGifs =  async category => {

    const API_KEY = '2EAKEQwTJutvrBpCE2cF3coAnYxlcLtx'
    const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=20`
    const res = await fetch(URL_API)
    const { data } = await res.json()

    const gifsElements = data.map( ( {id, title , images: { downsized_large }} ) => ({
        id, 
        title,
        urlGiffy: downsized_large.url
    }))

    return gifsElements
}