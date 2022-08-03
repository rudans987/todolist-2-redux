import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {createTodo} from "../redux/modules/todos";

const Form=()=> {
  const title = React.useRef(null);
  const body = React.useRef(null);
  const dispatch = useDispatch();
 
  const [count, setCount] =useState(2)
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(title.current.value ===""|| body.current.value===""){
      return alert("값이 비어있어요!");
    }
    dispatch(createTodo({
      id: count, 
      title : title.current.value, 
      body: body.current.value, 
      isDone: false
    }));

    setCount((cur)=>cur+1);
    title.current.value="";
    body.current.value="";
  };


  return (
    <FormBox onSubmit={onSubmitHandler} className="form-box">
      <InputBoxes>
        <FormLabel className="form-label">제목</FormLabel>
        <InputTitle
          type="text" 
          ref={title}
          name="title"
        />
        <FormLabel className="form-label">내용</FormLabel>
        <InputBody
          type="text"
          name="body"
          ref={body}
        />
      </InputBoxes>
      <AddButton className="add-button">추가하기</AddButton>
    </FormBox>
  );
};


const FormBox = styled.form`
  background-color: #dce4f0;
  margin: 0 auto;
  display: flex;
  align-items: center;    
  padding: 30px;
  gap: 20px;
`;

const InputBoxes = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const InputTitle = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const InputBody = styled.input`
  height: 40px;
  width: 340px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const AddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #0080ff;
  width: 140px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export default Form;

