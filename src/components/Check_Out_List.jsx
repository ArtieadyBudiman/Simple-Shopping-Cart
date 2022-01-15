import {Card} from 'react-bootstrap';
import {useSelector} from 'react-redux';

const CheckOutList = ()=> {
   const cart = useSelector((data)=>data.product.cart);
   console.log(cart)

   return(
         <div className="CheckOut">
            <h3>Detail Belanja</h3>
            <Card className="cardProductCheckout">
            {cart.map((item)=>{
               return(
                  <Card.Body className="CheckOutItem" key="uid">
                  <Card.Img className="img-Checkout" variant="top" src={item.image.url} />
                     <div className="productSummary">
                        <Card.Title>{item.productName}</Card.Title>
                        <Card.Text>
                           {`${item.qty} x Rp ${parseInt(item.price).toLocaleString()},-`}
                        </Card.Text>
                        <Card.Text>
                           {`Rp ${parseInt(item.qty * item.price).toLocaleString()},-`}
                        </Card.Text>
                     </div>
                  </Card.Body>
               )
            })}
            </Card>
         </div>
   )
}

export default CheckOutList;