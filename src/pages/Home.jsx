import Header from './../components/Header';
import Product from './../components/Product'
import Bottom from './../components/Bottom'
import {useSelector} from 'react-redux';

const Home = ()=>{
   const globalStore = useSelector((data)=>data);
   const cart = globalStore.product.cart;
   

   return(
      <>
         <Header/>
         <Product/>
         {/* {cart.length ? ( */}
            <Bottom
               button = "Checkout"
               link = "/checkout"
               totalAmount ={
                  cart.length ? cart.map ((item)=> item.qty * item.price).reduce((a,b)=> a + b) : 0
               }
            />
         {/* ) : null} */}
      </>
      )
};

export default Home;