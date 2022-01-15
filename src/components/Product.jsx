import {Button, Card, InputGroup, FormControl} from 'react-bootstrap';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getListItem, changeQty, addCart} from './../redux/action/productAction';

const Product = ()=>{
   const dispatch = useDispatch();
   const globalStore = useSelector((data)=>data);
   const itemList = globalStore.product.itemList;
   
   useEffect(()=>{
      dispatch(getListItem());
   }, [])

   // console.log(globalStore)

   useEffect(()=>{
      dispatch(addCart(itemList));
   }, [itemList])
   
   const handleOnChange = (event,item) =>{
      const value = event.target.value;
      const uid = item.uid;
      dispatch(changeQty({uid,value}))
      // console.log(value)
   }

   return(
         <div className="product">
            {itemList.map((item)=>{
               return(
               <Card className="card-product shadow-sm p-3 bg-body rounded" key={item.uid}>
                  <Card.Img className="img-product" variant="top" src={item.image.url} alt={item.image.altText} />
                  <Card.Body>
                     <Card.Title>{item.productName}</Card.Title>
                     <Card.Text>Stock: {item.availableQuantity}</Card.Text>
                     <Card.Text>
                        {`Rp ${parseInt(item.price).toLocaleString()},-`}
                     </Card.Text>
                     <InputGroup className="mb-3">
                        <Button 
                           variant="secondary" 
                           id="button-addon1"
                           onClick={
                              ()=>{dispatch(changeQty({uid:item.uid,value:item.qty - 1}))}
                           }
                           disabled={item.qty <= 0 ? true:false}
                        >
                           -
                        </Button>
                        <FormControl
                           aria-label="Example text with button addon"
                           aria-describedby="basic-addon1"
                           type="number"
                           value={item.qty}
                           onChange={(e)=>handleOnChange(e,item)}
                        />
                        <Button 
                           variant="secondary" 
                           id="button-addon1"
                           onClick={
                              ()=>{dispatch(changeQty({uid:item.uid,value:item.qty + 1}))}
                           }
                           disabled={item.qty >= item.availableQuantity ? true:false}
                        >
                           +
                        </Button>
                     </InputGroup>
                  </Card.Body>
               </Card>
               )
            })}
         </div>
   )
}

export default Product;