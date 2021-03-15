import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        dishe: state.dishes,
        comment: state.comment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}
class Menu extends Component {
    constructor(props){
        super(props)
        this. state = {
            selectedDish: null,
            modalOpen: false
        }
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const menu = this.props.dishe.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)}
                />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comment.filter(comment =>
                comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments}
                addComment={this.props.addComment}
                />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                            <hr/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);