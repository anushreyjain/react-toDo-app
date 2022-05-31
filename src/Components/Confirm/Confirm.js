import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from 'antd';
import "./Confirm.css"

const Confirm = () => {
  const { id } = useParams();
  const todo = useSelector((state) => state.todo.filter((t) => t.id === id))[0];
  console.log(todo.title);
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card
          title="Confirmation of your ToDo"
          bordered={false}
          className="card"
        >
          <p>Title - {todo.title}</p>
          <p>Description - {todo.description}</p>
          <p>Status - {todo.status}</p>
        </Card>
      </div>
    </div>
  );
};

export default Confirm;
