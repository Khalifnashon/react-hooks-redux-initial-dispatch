// we declare but do not assign our state, so it starts off undefined. 
// Then at the bottom the file, we dispatch an action of '@@INIT'. 
let state;

function changeState(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

dispatch({ type: "@@INIT" });