import React, { Component } from "react";

import TodoForm from "./todoForm";
import TodoList from "./todoList";

import PageHeader from "../template/pageHeader"

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}