import {useSelector} from 'react-redux';

const CheckOutList = ()=> {
   const cart = useSelector((data)=>data.product.cart);
   console.log(cart)

   return(
         <div className="CheckOut row col-md-8 col-10 justify-content-center mx-auto shadow p-3 bg-body rounded">
            <h3 className="checkOutTitle">Detail Belanja</h3>
            <div className="cardProductCheckout justify-content-center col-11 d-flex flex-column mb-3">
            {cart.map((item)=>{
               return(
                  <div className="CheckOutItem d-flex flex-row align-items-center my-3 shadow-sm p-3 bg-body rounded" >
                     <div className=" image col-6" >
                        <img className="img-Checkout img-fluid p-3"  src={item.image.url} />
                     </div>
                     <div className="productSummary col-6">
                        <h4>{item.productName}</h4>
                        <p className="totalHarga">
                           {`${item.qty} x Rp ${parseInt(item.price).toLocaleString()},-`}
                        </p>
                        <p className="totalBelanja">
                           {`Rp ${parseInt(item.qty * item.price).toLocaleString()},-`}
                        </p>
                     </div>
                  </div>
               )
            })}
            </div>
         </div>
   )
}

export default CheckOutList;