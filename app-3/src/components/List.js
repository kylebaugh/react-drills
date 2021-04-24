import React from 'react'

function List (props){
    console.log(props)

    return(
        <div className='List'>
            <h1>{props.petsArray}</h1>
        </div>
    )
}

export default List