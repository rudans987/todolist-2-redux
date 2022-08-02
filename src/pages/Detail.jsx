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
            <button onClick={() => {
                navigate(-1);
            }}>
                이전으로
            </button>
        </DetailBox>

    )
}

const DetailBox = styled.div`
 background-color: #fff;
    width: 300px;
    height: 200px;
    margin: 200px auto;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
`;

export default Detail;