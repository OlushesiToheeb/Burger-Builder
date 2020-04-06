import React from 'react';
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import axiosPost from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input"

class ContactData extends React.Component{
    state = {
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:''
            },
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Street'
                },
                value:''
            },
            zipCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP CODE'
                },
                value:''
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:''
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:''
            },
            delliveryMethod:{
                elementType:'input',
                elementConfig:{
                    option:[
                        {value: "fastest", displayValue:"Fastest" },
                        {value: "cheapest", displayValue:"Cheapest" }
                    ]
                },
                value:''
            }
        },
        loading:false
    }

    orderHandler =(event)=>{
        event.preventDefault();

        this.setState({ loading :true })

        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price
        }
        axiosPost.post('/orders.json', order)
        .then(resp =>{
            console.log(resp, resp.data)
            this.setState({ loading:false })
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({ loading:false })
        })
    }

    render(){

        const formElementsArray =[];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            });
        }
        let  form = (
            <form>
                    
                    {formElementsArray.map(formElement =>(
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}/>
                    ))}
                    <Button btnType='success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        )

        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData