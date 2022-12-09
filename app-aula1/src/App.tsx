import React, { ChangeEvent, ChangeEventHandler, useId, useState } from 'react';
import './App.css';
import { UserProvider, Header, userDataLoader } from './components';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigation,
} from "react-router-dom";

import {LoginPage, RegisterPage, HomePage} from "./pages";

const router = createBrowserRouter([
  {
    path: "register",
    element: (
      <div>
        <Header options={["Login", "Cadastro"]}/>
        <RegisterPage/>
      </div>
    ),
    /* loader: teamLoader, */
  },
  {
    path: "login",
    element: (
      <div>
        <Header options={["Login", "Cadastro"]}/>
        <LoginPage/>
      </div>
    ),
    /* loader: teamLoader, */
  },
  {
    path: "/",
    loader: userDataLoader,
    element: (
      <div>
        <Header options={["Profile", "Logout"]}/>
        <HomePage/>
      </div>
    ),
    /* loader: teamLoader, */
  },
]);

function App() 
{
  
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <RouterProvider router={router}/>
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
