import React from 'react';
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";

class ContactData extends React.Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
    }
    render(){
        return(
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input text="text" className='input' name="name" placeholder='Your name'/>
                    <input text="email" className='input' name="email" placeholder='Your email'/>
                    <input text="text" className='input' name="street" placeholder='Street'/>
                    <input text="text" className='input' name="postal" placeholder='Postal Code'/>
                    <Button btnType='success'>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData