import useFetchGifs from '../hooks/useFetchGifs'
import { GiffyGridItem } from './GiffyGridItem'

// Cargamos el spinner component
import { Loading } from './Loading'

const GiffyGrid = ({ category }) => {

    const { giffys, isLoading } = useFetchGifs( category  )

    return (
        <>
            <h2>{ category }</h2>
            { isLoading && ( <Loading />) }
            <article className='card-grid'>
                {
                    giffys.map( gif => (
                        <GiffyGridItem
                            key={ gif.id }
                            {...gif }
                        />
                    ))
                }
            </article>
        </>
    )
}

export default GiffyGrid