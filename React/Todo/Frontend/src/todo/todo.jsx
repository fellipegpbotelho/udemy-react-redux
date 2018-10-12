import React from "react";

import TodoForm from "./todoForm";
import TodoList from "./todoList";

import PageHeader from "../template/pageHeader"

export default props => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);