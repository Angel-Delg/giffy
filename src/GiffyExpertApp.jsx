import React, { useState } from "react";
import { FormAddCategory } from "./components/FormAddCategory";
import GiffyGrid from "./components/GiffyGrid";

export const GiffyExpertApp = () => {

    const [categories, setCategories] = useState( [] )

    const onAddCategory = newCategory => {
        if( categories.includes( newCategory )) return alert('Ya exite en la lista')
        setCategories([  newCategory , ...categories ])
    }

    return(
        <>
            <FormAddCategory  
                onNewValue={ onAddCategory }    
            />

            {/* le pasamos la categoria al componente como prop para hacer llamado a la api */}
            {
                categories.map( category => (
                    <GiffyGrid 
                        key={ category } 
                        category={ category } 
                    />
                ))
            }
        </>
    )
}