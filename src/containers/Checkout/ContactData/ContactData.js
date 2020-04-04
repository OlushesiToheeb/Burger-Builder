import React from 'react';
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import axiosPost from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends React.Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }

    orderHandler =(event)=>{
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({ loading :true })

        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:{
                name:"Olushesi Toheeb",
                address:{
                    street: "Teststreet 1",
                    zipCode:"41351",
                    country:"Nigeria"
                },
                email:"test@test.com"
            },
            delliveryMethod:"fastest"
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
        let  form=(
            <form>
                    <input text="text" className='input' name="name" placeholder='Your name'/>
                    <input text="email" className='input' name="email" placeholder='Your email'/>
                    <input text="text" className='input' name="street" placeholder='Street'/>
                    <input text="text" className='input' name="postal" placeholder='Postal Code'/>
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