import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    updateCartItemCount(newQuantity, id);
  };

  const handleDelete = () => {
    removeFromCart(id);
  };

  const subtotal = cartItems[id] * price;

  return (
    <table className="cart-item-table" border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{productName}</td>
          <td>
            <img src={productImage} alt={productName} />
          </td>
          <td>
            <div className="countHandler">
              <input
                type="number"
                value={cartItems[id]}
                onChange={handleQuantityChange}
              />
            </div>
          </td>
          <td>${price}</td>
          <td>${subtotal}</td>
          <td>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
