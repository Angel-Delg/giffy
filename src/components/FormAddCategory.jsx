import PropTypes from 'prop-types'
import { useState } from 'react'

export function FormAddCategory ( { onNewValue } ){

    const [category, setCategory] = useState('')

    const handleChangeCategory = ( { target } ) => {
        setCategory( target.value.trim() )
    }
    
    // handleCategory
    const handleSubmitCategory = event => {
        event.preventDefault()

        if ( category.length === 0 ) {
            return
        }

        // Si no se cumple agregala
        onNewValue( category )
        setCategory('')
    }

    return(
        <form 
            className='containerForm' 
            onSubmit={ handleSubmitCategory }>

            
            <h1 className="titleApp">GiffyExpertApp</h1>

            <input 
                onChange={ handleChangeCategory } 
                value={ category } 
                type="text" 
                placeholder='Search giffy' 
                required  
            />
            <button 
                className='ButtonCategory'
            > 
             search
            </button>
        </form>
    )
}

FormAddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired
}