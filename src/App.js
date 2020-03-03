import React from "react";
import { Provider } from "react-redux";
import store from './store'
import Todolist from './Todolist'

function App() {
  return (
    <Provider store={store}>
      <Todolist/>
    </Provider>
  );
}

export default App;
