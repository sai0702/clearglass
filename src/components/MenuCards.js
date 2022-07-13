import React, { useContext} from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
// import {data} from '../assets/images'
import '../assets/MenuCardsStyle.css';
import {CartContext} from "./CartTest";


  

const Items = ({ id, qty, title, price, linkImg }) => {
    const {  increment, decrement } = useContext(CartContext);
  
    return (
        // <div className="wrapper">
        // <h2>In Store</h2>
        // <div className="cards_wrap ">
        <div className="card_item gradient-border" key={id}>
            <div className="cardInner ">
                <img src={linkImg} alt={title}/>
                <h1 className="card_name">{title}</h1>
            </div>
            <div className="card_lower">
            <h3 className="price">{price}</h3>
            <div>
            
                <ButtonGroup variant="contained" aria-aria-label="outlined secondary button group">
                    <Button onClick={()=> decrement(id)}>
                    {" "}
                    <RemoveIcon />
                    </Button>
                    <Button style={{color:"green", fontSize:"20px"}}>{qty}</Button>
                    {/* <input type="text" placeholder={qty} disabled /> */}
                    <Button
                        onClick={()=> increment(id)}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>

            </div>
            </div>
        </div>
        // </div>
        // </div>
    );
  };
  
  export default Items;









// const initialState={
//     items:data,
//     totalAmount:0,
//     totalItems:0,
//     qty:0,
// };

// function MenuCards(){
//     // const [item,setItemCount]=React.useState(item);
//     const [state,dispatch]=useReducer(reducer,initialState)
//     const reducer=(state,action)=>{
//         if (action.type==="INCREMENT"){
//             let updatedCart=state.items.map((curEle)=>{
//                 if (curEle.id===action.payload){
//                     return {...curEle,qty:curEle.qty+1}

//                 }
//                 return curEle;

//             });
//             return {...state,items:updatedCart}
//         }
//         else if (action.type==="DECREMENT"){
//             let updatedCart=state.items.map((curEle)=>{
//                 if (curEle.id===action.payload){
//                     return {...curEle,qty:Math.max(curEle.qty-1,0)}

//                 }
//                 return curEle;

//             });
//             return {...state,items:updatedCart}
//         }
//         return state;
    
//     }
//     const increment=(id)=>{
//         return dispatch({
//             type:"INCREMENT",
//             payload:id,
//         });
//     };
//     const decrement=(id)=>{
//         return dispatch({
//             type:"DECREMENT",
//             payload:id,
//         });
//     };

//     return(
//         <div className="wrapper">
//         <h2>In Store</h2>
//         <div className="cards_wrap ">
//         {data.map(item=>(
//         <div className="card_item gradient-border" key={item.id}>
//             <div className="cardInner ">
//                 <img src={item.linkImg} alt={item.title}/>
//                 <h1 className="card_name">{item.title}</h1>
//             </div>
//             <div className="card_lower">
//             <h3 className="price">{item.price}</h3>
//             <div >
            
//                 <ButtonGroup variant="contained" aria-aria-label="outlined secondary button group">
//                     <Button onClick={()=> decrement(item.id)}>
//                     {" "}
//                     <RemoveIcon />
//                     </Button>
//                     <Button value={{...state}} onClick={()=> increment(item.id)}>{item.qty>0 ? item.qty:<h5>Add To Cart</h5>}</Button>
//                     <Button
//                         onClick={()=> increment(item.id)}
//                         value={{...state}}
//                     >
//                         {" "}
//                         <AddIcon fontSize="small" />
//                     </Button>
//                 </ButtonGroup>

//             </div>
//             </div>
//         </div>
//         ))}
//         </div>
//         </div>
//     );
// }
// export default MenuCards;