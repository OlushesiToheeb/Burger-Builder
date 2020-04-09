import React from 'react';
import Order from "../../components/Order/Order";
import axiosOrder from '../../axios-orders';
import withErrorHandler from "../../hoc/withErroHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends React.Component{
    state ={
        orders:[],
        loading:true
    }

    componentDidMount(){
        axiosOrder.get('/orders.json')
            .then(res => {
                const fetchedOrder =[];
                for (let key in res.data){
                    fetchedOrder.push({
                        ...res.data[key],
                        id:key
                    })
                    
                }
                this.setState({loading : false, orders:fetchedOrder})
                
            })
            .catch(err =>{
                this.setState({loading : false})
            })
    }

    render(){

        let orders = (
            <div>
                {this.state.orders.map(order =>(
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}/>
                ))}
            </div>
        )

        if(this.state.loading){
            orders= <Spinner/>
        }

        return(
            <div>
                {orders}
            </div>
        )  
        ;
    }
}

export default withErrorHandler(Orders, axiosOrder)