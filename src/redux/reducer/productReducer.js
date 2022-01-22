const initialState = {
   itemList:[],
   cart:[]
   
}

const productReducer = (state = initialState, action) => {
   switch(action.type) {
      case "SET_LIST_ITEM":{
         return{
            ...state,
            itemList : action.payload,
         };
      }
      case "SET_CART":{
         return{
            ...state,
            cart : action.payload.filter((item)=> item.qty > 0),
         };
      }
      case "CHANGE_QTY":{
         return{
            ...state,
            itemList : state.itemList.map((item)=>{
               if (item.uid === action.payload.uid){
                  return{
                     ...item,
                     qty : action.payload.value,
                  };
               }else{
                  return item;
               }
            }),
         };
      }
      case 'CHANGE_STOCK':
      return {
         ...state,
         itemList: state.itemList.map((item) => {
            if (item.uid === action.payload.uid) {
               return {
               ...item,
               stock: item.availableQuantity - action.payload.value,
               };
            } else {
               return item;
            }
         }),
      };
      default:{
         return{
            ...state,
         }
      }
   }
}

export default productReducer;