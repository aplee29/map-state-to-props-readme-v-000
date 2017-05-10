export default function shoppingListItemReducer(state = {items: []}, action) {
  console.log(action)
  switch(action.type) {

    case 'INCREASE_COUNT':
      let items;
      items = state.items.concat(state.items.length + 1)
      let proposedState = Object.assign({}, {items: items})
      console.log(proposedState)
      return proposedState;

    default:
      console.log(state)
      return state;
  }
};
