import React, { Component } from "react";
import axios from "axios";

import TodoForm from "./todoForm";
import TodoList from "./todoList";

import PageHeader from "../template/pageHeader"

const api = axios.create({
  baseURL: "http://localhost:3003/api/",
});

export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: "",
      list: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refresh = this.refresh.bind(this);

    this.refresh();
  }

  refresh() {
    api
      .get(`/todos?sort=-createdAt`)
      .then(response => {
        this.setState({ ...this.state, description: "", list: response.data });
      });
  }

  handleChange({ target: { value } }) {
    this.setState({ ...this.state, description: value });
  }

  handleAdd() {
    const description = this.state.description;

    api
      .post("/todos", { description })
      .then(response => {
        this.refresh();
      })
  }

  handleRemove(todo) {
    api
      .delete(`/todos/${todo._id}`)
      .then(response => {
        this.refresh();
      });
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm 
          handleAdd={this.handleAdd} 
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}