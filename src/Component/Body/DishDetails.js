import React from 'react'
import {Card, CardImg, CardBody,CardTitle,CardText,Button } from 'reactstrap'
import LoadComment from './LoadComment'

const DishDetails=(props)=>{
    return(
        <div>
            <Card style={{marginTop: "15px"}}>
                <CardImg src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>
                        <h3>{props.dish.name}</h3>
                    </CardTitle>
                    <hr/>
                    <CardText >
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price} tk only...
                    </CardText>
                    <Button  color="primary">Add to cart</Button>
                    <hr/>
                    <LoadComment comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    )
}
export default DishDetails