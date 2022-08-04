import React from "react";
import styled from "styled-components";


import {useParams, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const Detail = ()=>{
    const navigate =useNavigate();
    const params = useParams(); 
    const todo_list = useSelector((state)=>state.todos.list);
   
    const todo = todo_list.find(cur=>cur.id === Number(params.id))
    return(
              <DetailBox>
            <div>id:{todo.id}</div>
            <h2>{todo.title}</h2>
            <div>{todo.body}</div>
            <Button onClick={() => {
                navigate(-1);
            }}>
                이전으로
            </Button>
        </DetailBox>
    )
}

const DetailBox = styled.div`
 background-color: #fff;
    width: 300px;
    height: 200px;
    margin: 200px auto;
    border-radius: 10px;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;



const Button = styled.button`
    width: 80px;
    margin-top: 20px;
`




export default Detail;