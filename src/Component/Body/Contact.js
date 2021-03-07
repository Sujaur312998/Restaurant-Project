import React,{Component} from 'react'
import {Button,Form,FormGroup,Label,Input,Col} from 'reactstrap'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName: '',
            telNum:'',
            email: '',
            agree: false,
            contactType:'tel',
            message:''
        }

        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleInputChange=event=>{
        const value= event.target.type ==='cheackbox' ? event.target.checked : event.target.value

        const name= event.target.name
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit=event=>{
        console.log(this.state)
        event.preventDefault();
    }


    render(){
        return(
            <div className='container'>
                <br />
                <div className='row row-content'>
                    <div className='col-sm-12'>
                        <h3 style={{textDecoration:'underline'}}>Send us feedback</h3>
                        <hr />
                    </div>
                </div>

                <div className='col-sm-12 md-7' style={{textAlign:"left"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup  row >
                            <Label htmlFor='firstname' md={2}>First Name :</Label>
                            <Col md={4}>
                                <Input type='text' name='firstName' placeholder='First Name...' required
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                            <Label htmlFor='lastName' md={2}>Last Name :</Label>
                            <Col md={4}>
                                <Input type='text' name='lastName' placeholder='Last Name...' required
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='telNum' md={2}>Mobile Number :</Label>
                            <Col md={10}>
                                <Input type='number' name='telNum' placeholder='+880  XXXXXXXXXX' required
                                    value={this.state.telNum}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='email' md={2}>Email :</Label>
                            <Col md={10}>
                                <Input type='email' name='email' placeholder='mr...@gmail.com' required 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:3,offset:2}}>
                                <FormGroup check>
                                    <Label check> 
                                        <Input type='checkbox' 
                                            name='agree' 
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange}
                                            />
                                        <strong>May we contact with you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:2,offset:1}}>
                                <Label htmlFor='contactType'>Contact Type</Label>                            </Col>
                            <Col md={{size:4,offset:0}}>
                                <Input type='select' name='contactType' 
                                    onChange={this.handleInputChange}
                                    value={this.state.contactType}>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                        <option>Mobile</option>
                                </Input>
                                
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor='telNum' md={2}>Message :</Label>
                            <Col md={10}>
                                <Input type='textarea' name='message' placeholder='Type your feedback...' required
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:2,padding:'10px'}}>
                                <Button type='submit'color='success'>Submit</Button>
                            </Col>
                        </FormGroup>


                    </Form>

                </div>

            </div>
        )
    }
}
export default Contact