import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtodo } from "../../store/actions/todoActions";
import { Form, Input, Button, DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import "./Todo.css";

const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    const { title, description, duedate, status } = e;
    const newtodo = {
      id: uuidv4(),
      title: title,
      description: description,
      duedate: duedate,
      status: status,
    };
    dispatch(addtodo(newtodo));
    navigate(`/confirm/${newtodo.id}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-wrapper">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="DatePicker"
          name="duedate"
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
        >
          <Select>
            <Select.Option value="ToDo">ToDo</Select.Option>
            <Select.Option value="Ongoing">Ongoing</Select.Option>
            <Select.Option value="Stalled">Stalled</Select.Option>
            <Select.Option value="Done">Done</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Todo;
