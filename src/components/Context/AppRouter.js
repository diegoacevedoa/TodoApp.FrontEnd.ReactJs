import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Example from "../elements/example/Example";
import { Example2 } from "../elements/example2/Example2";
import TodoApp from "../Reducer/TodoApp/TodoApp";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/todoApp" element={<TodoApp />} />
            <Route
              path="/example"
              element={
                <Example nombre="Tierra 1" lenguaje="React" value={10} />
              }
            />
            <Route path="/example2" element={<Example2 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
