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
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
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
    api.post("/todos", { description })
      .then(() => this.refresh());
    
  }

  handleRemove(todo) {
    api.delete(`/todos/${todo._id}`)
      .then(() => this.refresh());
  }

  handleMarkAsDone(todo) {
    api.put(`/todos/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh());
  }

  handleMarkAsPending(todo) {
    api.put(`/todos/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh());
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
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}