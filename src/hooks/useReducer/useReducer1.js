const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  // if (action?.type === "agregar") {
  //   return [...state, action.payload];
  // }

  return state;
};

//Initial value
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const newAction = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, newAction);

console.log(todos);

export default todoReducer;
