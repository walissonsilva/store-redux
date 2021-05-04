import React from 'react'
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(
    state => state.cart.items
  )

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        { cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{item.quantity * item.product.price}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default Cart;