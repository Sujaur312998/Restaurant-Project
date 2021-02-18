import React from 'react'
import {Card, CardImg, CardBody,CardImgOverlay,CardTitle} from 'reactstrap'

const Menuitem=(props)=>{
    return(
        <div>
            <Card style={{margin:"15px"}}>
                <CardBody>
                    <CardImg 
                        width="100%" 
                        alt={props.dish.name} 
                        src={props.dish.image}
                        style={{opacity:0.7}}
                    />
                    <CardImgOverlay>
                        <CardTitle 
                            onClick={()=>props.DishSelect(props.dish)}
                            style={{cursor: "pointer"}}>
                            <h3>{props.dish.name}</h3>
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default Menuitem