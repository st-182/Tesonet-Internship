import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//GLOBAL CSS
import { GlobalStyle } from "./GlobalStyles";
// Screens
import HomeScreen from "./screens/HomeScreen";

// Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutScreen from "./screens/AboutScreen";

// CONTEXT
export const TodosContext = React.createContext();

// STATE MANAGEMENT
// -- global
// useReducer for sorting todos on HomeScreen
const todosInitialState = { todos: undefined };
const todosReducer = (state, action) => {
  switch (action.type) {
    case "Update Todos":
      return { todos: action.payload };

    default:
      return state;
  }
};
function App() {
  // Hooks
  // -- state
  const [todosState, todosDispatch] = useReducer(
    todosReducer,
    todosInitialState
  );

  return (
    <>
      <GlobalStyle />
      <TodosContext.Provider value={{ todosState, todosDispatch }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
          </Switch>
        </Router>
      </TodosContext.Provider>
      <Footer />
    </>
  );
}

export default App;
