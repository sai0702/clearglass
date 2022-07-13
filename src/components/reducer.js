export const reducer = (state, action) => {
    // if (action.type === "REMOVE_ITEM") {
    //   return {
    //     ...state,
    //     item: state.item.filter((curElem) => {
    //       return curElem.id !== action.payload;
    //     }),
    //   };
    // }
  
    // if (action.type === "CLEAR_CART") {
    //   return { ...state, item: [] };
    // }
  
    if (action.type === "INCREMENT") {
      const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, qty: curElem.qty + 1 };
        }
        return curElem;
      });
  
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "DECREMENT") {
      const updatedCart = state.item
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, qty: Math.max(curElem.qty - 1,0) };
          }
          return curElem;
        })
      return { ...state, item: updatedCart };
    }
  
    if (action.type === "GET_TOTAL") {
      let { totalItem, totalAmount } = state.item.reduce(
        (accum, curVal) => {
          let { cost, qty } = curVal;
  
          accum.totalAmount += cost*qty;
  
          accum.totalItem += qty;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }
    return state;
  };