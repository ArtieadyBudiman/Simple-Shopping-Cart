import Header from './../components/Header';
import CheckOutList from './../components/Check_Out_List';
import Bottom from './../components/Bottom';
import {useSelector} from 'react-redux';


const CheckOut = ()=>{
   const globalStore = useSelector((data)=>data);
   const cart = globalStore.product.cart;

   return(
      <>
         <Header/>
         <CheckOutList/>
         <Bottom
            button="Payment"
            link="/"
            totalAmount={cart.map((item)=>item.qty * item.price).reduce((a, b) => a + b)}
         />
      </>
      )
};

export default CheckOut;