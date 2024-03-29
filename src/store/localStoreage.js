import {createStore, combineReducers } from 'redux';
import listReducers from '../features/list/reducer';


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null)
    return JSON.parse(serializedState)

  }catch(e)
  console.log(e)
}

const rootReducer = combineReducers ({
  list: listReducers,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()
)

export default store;


// store.subscribe(() => saveToLocalStorage(store.getState()))
// export const loadState = () => {
//     // We need the try block because user may not permit our accessing localStorage.
//     try {
//       const serializedState = localStorage.getItem('state')
//       if (serializedState === null) { // The key 'state' does not exist.
//         return undefined;             // Let our reducer initialize the app.
//       }
  
//       return JSON.parse(serializedState)
  
//     } catch (error) {
//       console.log(error)
//       return undefined // Let our reducer initialize the app.
//     }
//   }
  
//   export const saveState = (state) => {
//     try {
//       // Serialize the state. Redux store is recommended to be serializable.
//       const serializedState = JSON.stringify(state)
//       localStorage.setItem('state', serializedState)
  
//     } catch (error) {
//       console.log(error)
//     }
//   }