import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Product = ()=>{
   const [data, setData] = useState([]);

   const getDataWithAxios = async ()=>{
      const res = await axios ('https://my-json-server.typicode.com/irhamhqm/placeholder-shops/items');
      // console.log(res.data)
      setData(res.data);
   };

   useEffect(()=>{
      getDataWithAxios();
   }, [])
   return(
      <div className="product">
         {data.map((item)=>{
            return(
            <Card className="card-product" style={{ width: '30%' }} key={item.uid}>
               <Card.Img className="img-product" variant="top" src={item.image.url} alt={item.image.altText} />
               <Card.Body>
                  <Card.Title>Product Name: {item.productName}</Card.Title>
                  <Card.Text>Stok: {item.availableQuantity}</Card.Text>
                  <Card.Text>Harga: {item.price}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
            )})}
         
      </div>
   )
}

export default Product;