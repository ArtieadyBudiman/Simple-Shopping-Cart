import axios from 'axios';

export const getListItem = ()=>{
   return async(dispatch)=>{
   try{
      const result = await axios('https://my-json-server.typicode.com/irhamhqm/placeholder-shops/items')
         const productData = result.data.map(data =>({...data, qty : 0, stock: data.availableQuantity}))
         dispatch({
            type:"SET_LIST_ITEM",
            payload: productData})
      } catch(err){
         console.log(err);
      }
   }
}

export const addCart =(data)=>{
   return {
      type:"SET_CART",
      payload: data,
   }
};

export const changeQty =(data)=>{
   return {
      type:"CHANGE_QTY",
      payload: data
   }
};

export const changeStock =(data)=>{
   return {
      type:"CHANGE_STOCK",
      payload: data
   }
};
