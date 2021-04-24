import React from 'react'

function FuncComp(props){
    return(
        <div>
            <input value={props.value}
            onChange={(e) => props.handleChangeFn(e.target.value)}/>
        </div>
    )
}

export default FuncComp