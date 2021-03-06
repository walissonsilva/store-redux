import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState } from './types'

const INITIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = (
  state = INITIAL_STATE,
  action
) => {
  const { type, payload } = action

  return produce(state, draft => {
    switch(type) {
      case 'ADD_PRODUCT_TO_CART':
        const { product } = payload

        const productInCartIndex = draft.items
          .findIndex(item => item.product.id === product.id)
        
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          })
        }


        break;
      default:
        return draft;
    }
  })
}

export default cart;