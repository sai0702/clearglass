import React, { useContext } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./MenuCards.js";
import { CartContext } from "./CartTest";
import "../assets/MenuCardsStyle.css";
import { NavBtn,NavBtnLink} from '../assets/NavbarElements';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const ContextCart = () => {
  const { item,totalItem,totalAmount } = useContext(CartContext);

  return (
    <div className="wrapper">
        <h2>In Store</h2>
        <div className="cards_wrap ">
          {item.map((curItem) => {
            return <Items key={curItem.id} {...curItem} />;
          })}
        </div>
          {totalItem &&
        <div className="bill" style={{zIndex:2,top:0,position:"fixed",}}>
          <Badge style={{top:"20vh",left:"30%"}}color="secondary" badgeContent={totalItem}>
          <ShoppingCartIcon style={{color:"white",fontSize:"40px",float:"right",display:"flex",flexDirection:"column"}}/>{" "}
          </Badge>

         
          <h2 style={{fontSize:"35px",top:"30vh",width:"300px"}}>Cart Total : ${totalAmount}</h2>
          <NavBtn style={{marginLeft:"2%",top:"35vh",position:"relative",border:"0px",background:"none",}} >
          <NavBtnLink  to='/checkout' >Checkout</NavBtnLink>
          </NavBtn>
        </div>}
        
        
    </div>
  );
};

export default ContextCart;

// const ContextCart = () => {
//   const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

//   if (item.length === 0) {
//     return (
//       <div>
//         <header>
//           <div className="continue-shopping">
//             <img src="https://w7.pngwing.com/pngs/336/105/png-transparent-arrow-free-content-quiver-arrow-line-s-angle-text-bow-and-arrow.png" alt="arrow" className="arrow-icon" />
//             <h3>continue shopping</h3>
//           </div>

//           <div className="cart-icon">
//             <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png" alt="cart" />
//             <p>{totalItem}</p>
//           </div>
//         </header>

//         <section className="main-cart-section">
//           <h1>shopping Cart</h1>
//           <p className="total-items">
//             you have <span className="total-items-count">{totalItem} </span>{" "}
//             items in shopping cart
//           </p>
//         </section>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <header>
//         <div className="continue-shopping">
//           <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
//           <h3>continue shopping</h3>
//         </div>

//         <div className="cart-icon">
//           <img src="./images/cart.png" alt="cart" />
//           <p>{totalItem}</p>
//         </div>
//       </header>

//       <section className="main-cart-section">
//         <h1>shopping Cart</h1>
//         <p className="total-items">
//           you have <span className="total-items-count">{totalItem} </span> items
//           in shopping cart
//         </p>

//         <div className="cart-items">
//           <div className="cart-items-container">
//             {/* <Scrollbars> */}
//               {item.map((curItem) => {
//                 return <Items key={curItem.id} {...curItem} />;
//               })}
//             {/* </Scrollbars> */}
//           </div>
//         </div>

//         <div className="card-total">
//           <h3>
//             Cart Total : <span>{totalAmount}₹</span>
//           </h3>
//           <button>checkout</button>
//           <button className="clear-cart" onClick={clearCart}>
//             Clear Cart
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContextCart;