import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row my-3">
            <div className="col-xs-10 col-md-10 mx-auto d-flex justify-content-center">
            <h2>{name}</h2><strong><h2 className="pl-3">{title}</h2></strong>  
            </div> 
        </div>
    )
}
