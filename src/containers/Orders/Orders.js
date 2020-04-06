import React from 'react';
import Order from "../../components/Order/Order";
import axiosOrder from '../../axios-orders';
import withErrorHandler from "../../hoc/withErroHandler"

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
                console.log(res, res.data);
            })
            .catch(err =>{
                this.setState({loading : false})
            })
    }

    render(){
        return(
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosOrder)