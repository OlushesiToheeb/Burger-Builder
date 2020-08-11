import React from 'react';
import Order from "../../components/Order/Order";
import axiosOrder from '../../axios-orders';
import withErrorHandler from "../../hoc/withErroHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Orders extends React.Component{

    componentDidMount(){
       this.props.onFetchorders(this.props.token, this.props.userId)
    }

    render(){

        let order= <Spinner/>
        if(!this.props.loading){
            order = (
                <div>
                    {this.props.orders.map(order =>(
                        <Order 
                            key={order.id}
                            ingredients={order.ingredients}
                            price={+order.price}/>
                    ))}
                </div>
            )  
        }

        return(
            <div>
                {order}
            </div>
        )  
        ;
    }
}

const mapStateToProps = state => {
    return{
        orders : state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId : state.auth.userId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchorders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axiosOrder))