import {ticketListAsyncAction} from "actions/home/homeActionCreator";
import {AddProAction} from "actions/cart/cartActionCreator"

export const mapStateToProps = (state)=>({
         data:state.ticketlist.data ||{},
         flag:state.ticketlist.flag
})

export const mapDispatchToProps = (dispatch) =>({
        handleGetData(id){
            dispatch(ticketListAsyncAction(id))
        },
        handleListAdd(obj){
            dispatch(AddProAction(obj))
        },
})