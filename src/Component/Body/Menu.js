import React,{Component} from 'react'
import DISHES from '../../data/dishes'
import Menuitem from './Menuitem'
import DishDetails from './DishDetails'

class Menu extends Component{

    state={
        dishes: DISHES,
        selectedDish: null
    }
    onDishSelect=(dish)=>{
        this.setState({
            selectedDish:dish
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
                    <div className='col-6'>
                        {menu}
                    </div>
                    <div className='col-6'>
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu