import React from "react";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";


import TodoList from "./pages/TodoList";
import Detail from "./pages/Detail";

const App=()=> {


 
  return (
    <Background>
      <Routes>       
         <Route path="/" element={<TodoList />}/>          
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
        </Background>
    )
}

const Background = styled.body`
position: absolute;
  top: 0;
  left: 0;
width:100%;
height: 100%;
background-color: #0080ff;
`;

export default App;



