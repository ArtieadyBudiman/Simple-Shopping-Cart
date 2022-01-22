import {Button, Card, InputGroup, FormControl} from 'react-bootstrap';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getListItem, changeQty, addCart, changeStock} from './../redux/action/productAction';

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
   
   const handleOnChange = (uid, value) =>{
      dispatch(changeQty({uid, value}))
      dispatch(changeStock({uid, value}))
      // console.log(value)
   }

   return(
         <div className="product col-12 col-md-10 mx-auto d-flex flex-row justify-content-center">
            {itemList.map((item)=>{
               return(
               <Card className="card-product col-10 col-md-3 shadow-sm p-3 bg-body rounded mx-3 my-3" key={item.uid}>
                  <Card.Img className="img-product" variant="top" src={item.image.url} alt={item.image.altText} />
                  <Card.Body>
                     <Card.Title>{item.productName}</Card.Title>
                     <Card.Text>Stock: {item.stock}</Card.Text>
                     <Card.Text>
                        {`Rp ${parseInt(item.price).toLocaleString()},-`}
                     </Card.Text>
                     <InputGroup className="mb-3">
                        <Button 
                           variant="secondary" 
                           id="button-addon1"
                           onClick={
                              ()=>{dispatch(handleOnChange(item.uid, item.qty - 1))}
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
                           onChange={(e)=>handleOnChange(item.uid, e.target.value)}
                        />
                        <Button 
                           variant="secondary" 
                           id="button-addon1"
                           onClick={
                              ()=>{dispatch(handleOnChange(item.uid, item.qty + 1))}
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