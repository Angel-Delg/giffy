import { useState, useEffect } from "react"
import { getGifs } from "../services/getGifs"

const useFetchGifs = ( category ) => {

    const [ giffys, setGiffys ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState(true)

    const newGiffyElement = async () => {
        const gifs = await getGifs( category )

        setGiffys(gifs)
        setIsLoading(false)
    }

    useEffect( () => {
        newGiffyElement()
    },[])

    return {
        giffys,
        isLoading
    }
}

export default useFetchGifs