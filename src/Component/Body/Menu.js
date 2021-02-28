import React,{Component} from 'react'
import DISHES from '../../data/dishes'
import Menuitem from './Menuitem'
import DishDetails from './DishDetails'
import {CardColumns,Modal,MadalBody,ModalFooter,Button, ModalBody} from 'reactstrap'


class Menu extends Component{

    state={
        dishes: DISHES,
        selectedDish: null,
        openModal: false
    }
    onDishSelect=(dish)=>{
        this.setState({
            selectedDish:dish
        })
        this.openModal()
    }
    
    openModal=()=>{
        this.setState({
            openModal: !this.state.openModal
        })
    }
    render(){
        const menu=this.state.dishes.map(item=>{
            return <Menuitem 
                        dish={item} 
                        key={item.id} 
                        DishSelect={this.onDishSelect}
                        />
        })

        let dishDetail=null
    if (this.state.selectedDish != null){
        dishDetail= <DishDetails dish={this.state.selectedDish} />
    }  

        return(
            <div className='container'>
                <div className='row'>
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.openModal}>
                        <ModalBody>{dishDetail}</ModalBody>
                        <ModalFooter>
                            <Button onClick={this.openModal} color="secondary">Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu