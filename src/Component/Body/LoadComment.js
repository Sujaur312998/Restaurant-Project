import React from 'react'
import dateFormat from 'dateformat'

const LoadComment=props =>{
    return(
        props.comments.map(itemComments=>{
            return(
                <div key={itemComments.id}>
                    <h5> {itemComments.author}  </h5>
                    <p>  {itemComments.comment} </p>
                    <p>  {dateFormat(itemComments.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}    </p>

                </div>)
        })
    )

}

export default LoadComment